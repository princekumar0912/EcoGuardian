import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, push, remove } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import database from '../Firebase'; // Adjust the path if necessary
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ManageData = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  // Fetch data from Firebase
  useEffect(() => {
    const dbRef = ref(database, 'complaints');
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        setData({});
      }
    });
  }, []);

  // Handle Delete Operation
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this complaint?")) {
      const dbRef = ref(database, `complaints/${id}`);
      remove(dbRef)
        .then(() => {
          toast.success("Complaint deleted successfully");
        })
        .catch((error) => {
          toast.error("Error deleting complaint: " + error.message);
        });
    } setTimeout(1000);
  };

  // Handle Edit Operation
  const handleEdit = (id) => {
    navigate(`/edit-complaint/${id}`); // Redirect to an edit page (you'll need to create this)
  };

  // Handle View Operation
  const handleView = (id) => {
    navigate(`/view-complaint/${id}`); // Redirect to a view page (you'll need to create this)
  };

  // Function to format timestamp into date and time
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Returns date and time in locale-specific format
  };

  return (
    <div className="container">
      <ToastContainer />
      <h2>Manage Complaints</h2>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Description</th>
            <th>Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && Object.keys(data).map((id) => (
            <tr key={id}>
              <td>{data[id].name}</td>
              <td>{data[id].email}</td>
              <td>{data[id].contact}</td>
              <td>{data[id].address}</td>
              <td>{data[id].description}</td>
              <td>{data[id].submittedAt}</td>
              <td>{data[id].status}</td>

              <td className='g-2 d-flex'>
                <button
                  className="btn col-auto btn-primary btn-sm"
                  onClick={() => handleView(id)}
                >
                  View
                </button>{' '}
                <button
                  className="btn col-auto btn-warning btn-sm"
                  onClick={() => handleEdit(id)}
                >
                  Edit
                </button>{' '}
                <button
                  className="btn col-auto btn-danger btn-sm"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageData;
