import React, { useState } from 'react';
import { getDatabase, ref, get } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import './TrackComplaint.css'; // Importing the CSS file

const TrackComplaint = () => {
  const [complaintId, setComplaintId] = useState('');
  const [complaintData, setComplaintData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    setComplaintId(e.target.value);
  };

  // Fetch complaint details from Firebase
  const fetchComplaintDetails = async () => {
    if (!complaintId) {
      toast.error("Please enter a complaint ID");
      return;
    }

    setLoading(true);

    try {
      const db = getDatabase();
      const complaintRef = ref(db, `complaints/${complaintId}`);
      const snapshot = await get(complaintRef);

      if (snapshot.exists()) {
        setComplaintData(snapshot.val());
        toast.success("Complaint details fetched successfully");
      } else {
        toast.error("No complaint found with this ID");
        setComplaintData(null);
      }
    } catch (err) {
      toast.error("Error fetching complaint details: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="trackComplaintContainer">
        <h2>Track Your Complaint</h2>
        <div className="inputGroup">
          <input
            type="text"
            id="complaintId"
            value={complaintId}
            onChange={handleInputChange}
            placeholder="Enter Complaint ID"
          />
          <button onClick={fetchComplaintDetails} disabled={loading}>
            {loading ? "Fetching..." : "Track Complaint"}
          </button>
        </div>

        {complaintData && (
          <div className="complaintDetails">
            <h3>Complaint Details</h3>
            <p className='bg-dark text-light p-3'><strong>Status:</strong> {complaintData.status}</p>
            <p><strong>Name:</strong> {complaintData.name}</p>
            <p><strong>Email:</strong> {complaintData.email}</p>
            <p><strong>Contact:</strong> {complaintData.contact}</p>
            <p><strong>Address:</strong> {complaintData.address}</p>
            <p><strong>Description:</strong> {complaintData.description}</p>
            <p><strong>Submitted At:</strong> {complaintData.submittedAt}</p>
            {complaintData.imageUrls && complaintData.imageUrls.length > 0 && (
              <div className="mediaSection">
                <h4>Uploaded Images</h4>
                {complaintData.imageUrls.map((url, index) => (
                  <img key={index} src={url} alt={`Complaint Image ${index + 1}`} />
                ))}
              </div>
            )}
            {complaintData.videoUrl && (
              <div className="mediaSection">
                <h4>Uploaded Video</h4>
                <video controls>
                  <source src={complaintData.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TrackComplaint;
