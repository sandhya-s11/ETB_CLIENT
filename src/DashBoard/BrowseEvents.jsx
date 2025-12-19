import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BrowseEvents = () => {
  const navigate = useNavigate();
  const [dbEvents, setDbEvents] = useState([]);

  
  const staticEvents = [
    {
      title: "Music Concert",
      description: "A grand evening filled with soulful music.",
      date: "25th Dec 2025",
      time: "8:00 PM",
      venue: "Convention Center",
      price: 999,
      image:
        "https://cdn10.phillymag.com/wp-content/uploads/sites/3/2018/11/live-music-bbt-pavilion-1024x683.jpg",
    },
    {
      title: "Tech Conference",
      description: "Meet innovators and explore future tech.",
      date: "15th Dec 2025",
      time: "9:00 AM",
      venue: "Tech Hub",
      price: 1499,
      image:
        "https://cdn.tech.eu/uploads/2018/04/infoshare-pic.jpg",
    },
    {
      title: "Stand-Up Comedy",
      description: "A laughter-filled night with top comedians.",
      date: "10th Dec 2025",
      time: "7:00 PM",
      venue: "Comedy Club",
      price: 799,
      image:
        "https://images.squarespace-cdn.com/content/v1/5b99bf7fc258b451bdc4fb54/268ceb67-e529-4d3f-8e42-dffd8276b301/Eli+packed+house.jpeg",
    },
    {
      title:"Food Festival",
      description:"Enjoy delicious food and vibrant culture.",
      date:"8th Dec 2025",
      time:"12:00 PM",
      venue:"Food Park",
       price:499,
       image:
       "https://iorbitnews.com/wp-content/uploads/2022/09/1.jpg"
    },
    {
      title:"Art Exhibition",
      description:"Explore captivating art pieces.",
      date:"5th Dec 2025",
      time:"10:00 AM",
      venue:"Art Gallery",
       price:200,
       image:
       "https://d197irk3q85upd.cloudfront.net/catalog/product/e/x/exhibition_banner_1.jpg"
    },
    {
      title:"Sports Championship",
      description:"Compete in thrilling sports events.",
      date:"20th Dec 2025",
      time:"6:00 PM",
      venue:"Sports Stadium",
       price:1299,
       image:
       "https://thumbs.dreamstime.com/b/sports-championship-golden-cup-background-stadium-sports-championship-golden-cup-background-stadium-created-273032920.jpg"
    }
  ];

  
  useEffect(() => {
    axios
      .get("https://etb-server-bj5o.onrender.com/api/events")
      .then((res) => setDbEvents(res.data));
  }, []);

  const allEvents = [...staticEvents, ...dbEvents];

const handleBooking = (event) => {
  navigate(`/user/dashboard/book/${event.title}`, {
    state: {
      ...event,
      venue: event.venue || event.location,
      name: event.title,
    },
  });
};


  return (
    <div
    className="min-h-screen p-6 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('https://wallpaperaccess.com/full/11122227.jpg')",
    }}>
    <div className="px-5 py-10">
      <div className="fixed top-0 left-0 w-full h-full bg-[url('https://wallpapercave.com/wp/wp7488230.jpg')] bg-cover bg-center opacity-20 -z-10"></div>

      <h1 className="text-3xl font-bold text-center mb-8">Our Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {allEvents.map((event, index) => (
          <div
            key={index}
            className="text-center p-5 rounded-2xl shadow-xl bg-white hover:shadow-2xl"
          >
            <img
              src={event.image}
              className="w-full h-48 object-cover rounded-xl"
              alt={event.title}
            />

            <div className="mt-3 border-2 border-blue-400 p-3 rounded-lg text-left">
              <strong>{event.title}</strong>
              <p>{event.description}</p>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>Venue: {event.venue}</p>
            </div>

            <button
              onClick={() => handleBooking(event)}
              className="mt-3 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-300"
            >
              Book Now – ₹{event.price}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BrowseEvents;
