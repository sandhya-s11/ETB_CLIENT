import { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`http://localhost:5000/api/bookings/user/${user.email}`)
      .then((res) => setBookings(res.data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

return (
  <div
    className="min-h-screen p-6 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('https://wallpaperaccess.com/full/11122227.jpg')",
    }}
  >
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
      🎟️ My Bookings
    </h2>

    {bookings.length === 0 && (
      <p className="text-center text-gray-700">
        No bookings found
      </p>
    )}

    {bookings.map((b) => (
      <div
        key={b._id}
        className="bg-white rounded-xl p-5 mb-4 shadow-xl border-l-8 border-purple-500 max-w-xl mx-auto"
      >
        <h3 className="text-xl font-bold text-purple-700">
          {b.eventName || "Event Name Not Available"}
        </h3>

        <p>📅 {b.date}</p>
        <p>⏰ {b.time || "Time not specified"}</p>
        <p>🎫 Tickets: {b.tickets}</p>

        <p className="font-semibold text-green-600 text-lg">
          ₹ {b.totalAmount}
        </p>
      </div>
    ))}
  </div>
);

};

export default MyBookings;
