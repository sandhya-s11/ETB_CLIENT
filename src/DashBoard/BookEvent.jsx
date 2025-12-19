import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BookEvent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [tickets, setTickets] = useState(1);
  const [name, setName] = useState("");

  
  if (!state) {
    navigate("/user/dashboard/events");
    return null;
  }

  const total = tickets * state.price;

  const handleConfirm = async () => {
    if (!name) {
      alert("Please enter your name");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await axios.post("http://localhost:5000/api/bookings", {
        userName: user.name,
        userEmail: user.email,
        eventName: state.title ,
        date: state.date,
        time: state.time || "Not specified",
        venue: state.venue || "Not specified",
        price: state.price,
        tickets,
        totalAmount: total,
      });


      alert("🎉 Booking Saved Successfully!");
      navigate("/user/dashboard/bookings");
    } catch (error) {
      console.error(error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">Book Ticket</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>
          <strong>Event:</strong> {state.title}
        </p>
        <p>
          <strong>Date:</strong> {state.date}
        </p>
        <p>
          <strong>Time:</strong> {state.time}
        </p>
        <p>
          <strong>Venue:</strong> {state.venue}
        </p>
        <p>
          <strong>Price:</strong> ₹{state.price}
        </p>

        <label className="block mt-3">Number of Tickets</label>
        <input
          type="number"
          min="1"
          className="border p-2 w-full"
          value={tickets}
          onChange={(e) => setTickets(Number(e.target.value))}
        />

        <p className="mt-4 font-semibold text-lg">
          Total Amount: ₹{total}
        </p>

        <button
          onClick={handleConfirm}
          className="mt-5 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookEvent;
