import React from "react"; 
import { useNavigate } from "react-router-dom"

const DashboardHome = () => {
const navigate = useNavigate();

  return (
    <div
    className="min-h-screen p-6 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('https://wallpaperaccess.com/full/11122227.jpg')",
    }}>
    <div className="px-6 py-6 space-y-10">
  
      
      <div className="bg-linear-to-r from-purple-100 via-pink-100 to-blue-100 text-white rounded-xl p-6 shadow">
        <h1 className="text-2xl  text-black font-semibold">
          Welcome to Event Ticket Booking 🎉
        </h1>
        <p className="text-sm mt-1 text-black">
          Book events, manage tickets and enjoy experiences     
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
          <img
            src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
            className="rounded-lg h-44 w-full object-cover"
          />
          <h3 className="mt-3 font-semibold text-lg">Live Events</h3>
          <p className="text-sm text-gray-500">
            Discover concerts, tech talks & workshops
          </p>
        </div>

        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-lg h-44 w-full object-cover"
          />
          <h3 className="mt-3 font-semibold text-lg">Easy Booking</h3>
          <p className="text-sm text-gray-500">
            Book tickets in just a few clicks
          </p>
        </div>

        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
            className="rounded-lg h-44 w-full object-cover"
          />
          <h3 className="mt-3 font-semibold text-lg">Attend & Enjoy</h3>
          <p className="text-sm text-gray-500">
            Attend events and track your history
          </p>
        </div>
      </div>

     

     
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          🔔 Upcoming Events
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between items-center border p-3 rounded-lg">
            <div>
              <h4 className="font-medium">Music Concert</h4>
              <p className="text-sm text-gray-500">25 Dec 2025</p>
            </div>
            <span className="text-blue-600 font-medium">View</span>
          </div>

          <div className="flex justify-between items-center border p-3 rounded-lg">
            <div>
              <h4 className="font-medium">Tech Meetup</h4>
              <p className="text-sm text-gray-500">10 Jan 2026</p>
            </div>
            <span className="text-blue-600 font-medium">View</span>
          </div>
        </div>
      </div>

     
      <div className="bg-linear-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Ready to explore more events?</h2>
          <p className="text-sm text-indigo-100">
            Browse latest events and book your seat now
          </p>
        </div>
      <button
  className="mt-4 md:mt-0 bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100"
  onClick={() => navigate("/user/dashboard/events")}
>
  Browse Events
</button>

      </div>

    </div>
    </div>
  );
};

export default DashboardHome;
