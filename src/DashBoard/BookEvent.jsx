import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BookEvent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [tickets, setTickets] = useState(1);
  const [name, setName] = useState("");

  if (!state) {
    navigate("/events");
    return null;
  }

  const total = tickets * state.price;

 const handleConfirm = async () => {
  if (!name) {
    alert("Please enter your name");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:5000/api/bookings",
      {
        userName: name,
        eventName: state.name,
        date: state.date,
        time: state.time,
        venue: state.venue,
        price: state.price,
        tickets,
        totalAmount: total,
      }
    );

    console.log("Booking response:", res.data);

    alert("🎉 Booking Saved Successfully!");
    navigate("/user/dashboard/bookings");
  } catch (error) {
    console.error("Booking failed:", error);
    alert("❌ Booking failed. Check console & backend.");
  }
};

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">Book Ticket</h2>

        <input
          placeholder="Your Name"
          className="border p-2 w-full mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p><strong>Event:</strong> {state.name}</p>
        <p><strong>Date:</strong> {state.date}</p>
        <p><strong>Venue:</strong> {state.venue}</p>

        <label className="block mt-2">Tickets</label>
        <input
          type="number"
          min="1"
          value={tickets}
          onChange={(e) => setTickets(Number(e.target.value))}
          className="w-full border p-2"
        />

        <p className="mt-3 font-semibold">Total: ₹{total}</p>

        <button
          onClick={handleConfirm}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookEvent;
