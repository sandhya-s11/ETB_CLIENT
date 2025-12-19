import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Events from "./Pages/Events";
import Signup from "./Pages/Signup";

// User Dashboard
import UserDashBoard from "./DashBoard/UserDashBoard";
import DashBoardHome from "./DashBoard/DashBoardHome";
import BookEvent from "./DashBoard/BookEvent";
import BrowseEvents from "./DashBoard/BrowseEvents";
import MyBookings from "./DashBoard/MyBookings";
import Profile from "./DashBoard/Profile";

// Admin Dashboard
import AdminDashboard from "./DashBoard/AdminDashboard";

const Layout = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/user/dashboard") ||
    location.pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

     
        <Route path="/user/dashboard" element={<UserDashBoard />}>
          <Route index element={<DashBoardHome />} />
          <Route path="events" element={<BrowseEvents />} />
          <Route path="book/:id" element={<BookEvent />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
