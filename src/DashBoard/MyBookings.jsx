import { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bookings")
      .then(res => setBookings(res.data));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

      {bookings.map((b) => (
        <div key={b._id} className="border p-4 rounded mb-3">
          <p><strong>{b.eventName}</strong></p>
          <p>Tickets: {b.tickets}</p>
          <p>Total: ₹{b.totalAmount}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
