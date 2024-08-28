import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDatabase, ref, get } from "firebase/database";
import database from '../Firebase'; // Adjust the path if necessary
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

const ViewData = () => {
  const [complaint, setComplaint] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams(); // Get the complaint ID from the URL
  const navigate = useNavigate();

  // Fetch the complaint data from Firebase
  useEffect(() => {
    const dbRef = ref(database, `complaints/${id}`);
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        setComplaint(snapshot.val());
      } else {
        setComplaint(null);
      }
    }).catch((error) => {
      console.error("Error fetching complaint data: ", error);
    });
  }, [id]);

  // Function to open the modal and display the selected image
  const openModal = (url) => {
    setSelectedImage(url);
    const modal = new window.bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  };

  if (!complaint) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="container">
      <h2>Complaint Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Complaint ID: {id}</h5>
          <p className="card-text"><strong>Name:</strong> {complaint.name}</p>
          <p className="card-text"><strong>Email:</strong> {complaint.email}</p>
          <p className="card-text"><strong>Contact:</strong> {complaint.contact}</p>
          <p className="card-text"><strong>Address:</strong> {complaint.address}</p>
          <p className="card-text"><strong>Description:</strong> {complaint.description}</p>
          <p className="card-text"><strong>complaint date/time:</strong> {complaint.submittedAt}</p>
          <p className="card-text"><strong>complaint status:</strong> {complaint.status}</p>



          {complaint.imageUrls && complaint.imageUrls.length > 0 && (
            <div className="card-text">
              <strong>Images:</strong><br />
              <div className="d-flex flex-wrap img-fluid">
                {complaint.imageUrls.map((url, index) => (
                  <div key={index} className="position-relative">
                    <img
                      src={url}
                      alt={`Uploaded ${index + 1}`}
                      className="img-fluid m-2"
                      style={{ maxWidth: '300px', cursor: 'pointer' }}
                      onClick={() => openModal(url)}
                    />
                    <button
                      className="btn btn-outline-light position-absolute top-0 start-0 m-2"
                      onClick={() => openModal(url)}
                    >
                      🔍 View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {complaint.videoUrl && (
            <p className="card-text" style={{ maxWidth: '300px' }}>
              <strong>Video:</strong><br />
              <video controls className="img-fluid">
                <source src={complaint.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </p>
          )}
          <button className="btn btn-dark" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>

      {/* Modal for viewing images in full screen */}
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModalLabel">Image Viewer</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={selectedImage} alt="Full View" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewData;
