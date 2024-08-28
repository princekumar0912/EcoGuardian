import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDatabase, ref, get, update } from "firebase/database";
import database from '../Firebase'; // Adjust the path if necessary
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const EditData = () => {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    address: '',
    description: '',
    zip: '',
    city: '',
    status: '',
  });
  const { id } = useParams(); // Get the complaint ID from the URL
  const navigate = useNavigate();

  // Fetch the complaint data from Firebase
  useEffect(() => {
    const dbRef = ref(database, `complaints/${id}`);
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        setState(snapshot.val());
      } else {
        toast.error("Complaint not found");
        navigate(-1); // Redirect back if complaint not found
      }
    }).catch((error) => {
      console.error("Error fetching complaint data: ", error);
    });
  }, [id, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dbRef = ref(database, `complaints/${id}`);
    update(dbRef, state)
      .then(() => {
        toast.success("Complaint updated successfully");
        setTimeout(() => navigate('/manage-data'), 2000); // Redirect after successful update
      })
      .catch((error) => {
        toast.error("Error updating complaint: " + error.message);
      });
  };

  return (
    <div className="editdatamain bg-light">
      <div className="container bg-light ">
        <ToastContainer />
        <h2>Edit/Update Complaint</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="firstname" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={state.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={state.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="contact" className="form-label">Contact</label>
            <input
              type="text"
              className="form-control"
              id="contact"
              name="contact"
              value={state.contact}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="contact" className="form-label">Status</label>
            <input
              type="text"
              className="form-control"
              id="status"
              name="status"
              value={state.status}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={state.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="description" className="form-label">Description of complaint</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={state.description}
              onChange={handleInputChange}
              rows="3"
            ></textarea>
          </div>
          {/* <div className="col-md-4">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={state.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">Zip</label>
          <input
            type="text"
            className="form-control"
            id="zip"
            name="zip"
            value={state.zip}
            onChange={handleInputChange}
          />
        </div> */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary">Update</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate(-1)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditData;
