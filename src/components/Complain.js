

import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, push, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { format } from "date-fns";
import { TailSpin } from 'react-loader-spinner';

// Initial state for the form
const initialState = {
  name: '',
  email: '',
  contact: '',
  address: '',
  description: '',
  status: 'pending'
};

const Complain = () => {

  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(initialState);
  const [images, setImages] = useState([]); // Multiple images state
  const [video, setVideo] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { name, email, contact, address, description } = state;

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // Handle file changes
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (e.target.name === "images") {
      setImages(Array.from(files)); // Convert FileList to array
    } else if (e.target.name === "video") {
      setVideo(files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !contact || !address || !description) {
      toast.error("Please provide value in each input field");
      return;
    }

    setUploading(true);
    setError(null);

    const storage = getStorage();
    let imageUrls = [];
    let videoUrl = "";

    const uploadPromises = [];

    // Upload images if present
    if (images.length > 0) {
      images.forEach((image, index) => {
        const imageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(imageRef, image);

        const imagePromise = new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress((prevProgress) => prevProgress + progress / images.length);
            },
            (error) => {
              setError(error.message);
              setUploading(false);
              reject(error);
            },
            async () => {
              const url = await getDownloadURL(uploadTask.snapshot.ref);
              imageUrls.push(url);
              resolve();
            }
          );
        });

        uploadPromises.push(imagePromise);
      });
    }

    // Upload video if present
    if (video) {
      const videoRef = ref(storage, `videos/${video.name}`);
      const uploadTask = uploadBytesResumable(videoRef, video);

      const videoPromise = new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress((prevProgress) => prevProgress + progress / (images.length + 1));
          },
          (error) => {
            setError(error.message);
            setUploading(false);
            reject(error);
          },
          async () => {
            videoUrl = await getDownloadURL(uploadTask.snapshot.ref);
            resolve();
          }
        );
      });

      uploadPromises.push(videoPromise);
    }

    try {
      await Promise.all(uploadPromises);

      // Generate unique complaint ID
      const db = getDatabase();
      const complaintsRef = dbRef(db, 'complaints');
      const newComplaintRef = push(complaintsRef);
      const complaintId = newComplaintRef.key; // Unique complaint ID

      // Formatted date
      const date = new Date();
      const formattedDate = format(date, "MMMM do, yyyy H:mma");

      // Prepare complaint data
      const formData = {
        ...state,
        imageUrls,
        videoUrl,
        submittedAt: formattedDate,
        complaintId, // Add the complaint ID here
      };

      // Store complaint data in Firebase
      await set(newComplaintRef, formData);
      toast.success("Complaint registered successfully");
      alert("plesse save your complaint ID=  " + complaintId);

      setTimeout(() => {
        navigate('/home');
      }, 3000);

    } catch (err) {
      setError(err.message);
      toast.error("Error uploading files: " + err.message);
    } finally {
      setLoading(false);
      setUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <>
      <ToastContainer />
      <div>{loading && (
        <div className="newloader">
          <TailSpin height={50} width={50} color="green" ariaLabel="loading" />
        </div>
      )}
        <div className="complain-mainHeader">
          <section className="container maincontanier  bgcolor w-50 text-light p-2">
            <form className="row g-3 p-2" method="post" onSubmit={handleSubmit} style={{ opacity: loading ? 0.5 : 1 }}>
              <p>Register complaint and Become a <span>Ecoranger</span> </p>
              <div className="col-md-6">
                <label htmlFor="Name" className="form-label">Name</label>
                <input
                  type="text"
                  placeholder='Complainant Name'
                  name='name'
                  className="form-control"
                  id="name"
                  required
                  value={name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <input
                    type="email"
                    placeholder='Complainant email'
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="contact" className="form-label">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder='Complainant contact'
                  value={contact}
                  onChange={handleInputChange}
                  name="contact"
                  id="contact"
                  maxLength="10"
                />
              </div>
              <div className="col-6">
                <label htmlFor="address" className="form-label">Address/Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  value={address}
                  onChange={handleInputChange}
                  placeholder="Address/Location of incident with landmark"
                />
              </div>
              <div className="col-12">
                <label htmlFor="description" className="form-label">Description of complaint</label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={handleInputChange}
                  id="description"
                  name="description"
                  placeholder='Enter the Description of problem'
                  rows="3"
                ></textarea>
              </div>
              <div className="col-md-5">
                <label htmlFor="images" className="form-label">Upload Images</label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/*"
                  multiple // Allow multiple files
                  onChange={handleFileChange}
                />

              </div>
              <div className="col-md-5">
                <label htmlFor="video" className="form-label">Upload Video</label>
                <input
                  type="file"
                  id="video"
                  name="video"
                  accept="video/*"
                  onChange={handleFileChange}
                />
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="buttonsubmit" disabled={uploading}  >submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Complain;
