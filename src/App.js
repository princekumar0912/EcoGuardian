import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Master from './components/Master';
import Home from './components/Home';
import UserLogin from './components/Authentication.js/UserLogin';
import Complain from './components/Complain';
import TrackComplaint from './components/TrackComplaint';
import ManageData from './components/Admin/ManageData';
import ViewData from './components/Admin/ViewData';
import Editdata from './components/Admin/Editdata';
import Dashboard from './components/Admin/Dashboard';
import About from './components/About';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/complain" element={<Complain />} />
          <Route path="/about" element={<About />} />
          <Route path="/trackcomplaint" element={<TrackComplaint />} />


        </Route>
        <Route path="/login" element={<UserLogin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/manage-data" element={<ManageData />} />
        <Route path="/edit-complaint/:id" element={<Editdata />} />
        <Route path="/view-complaint/:id" element={<ViewData />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
