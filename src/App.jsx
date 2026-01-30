import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Events from "./Pages/Events"; // ✅ ADD THIS

// User Dashboard
import UserDashBoard from "./DashBoard/UserDashBoard";
import DashBoardHome from "./DashBoard/DashBoardHome";
import UserEvents from "./DashBoard/UserEvents";     // ✅ ADD
import UserBookings from "./DashBoard/UserBookings"; // ✅ ADD

// Admin Dashboard
import AdminDashboard from "./DashBoard/AdminDashboard";

const Layout = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/user/dashboard") ||
    location.pathname.startsWith("/admin/dashboard");

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} /> {/* ✅ FIX */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User Dashboard */}
        <Route path="/user/dashboard" element={<UserDashBoard />}>
          <Route index element={<DashBoardHome />} />
          <Route path="events" element={<UserEvents />} />     {/* ✅ FIX */}
          <Route path="bookings" element={<UserBookings />} /> {/* ✅ FIX */}
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
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
