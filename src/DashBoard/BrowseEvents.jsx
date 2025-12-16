import React from "react";
import { useNavigate } from "react-router-dom";

const BrowseEvents = () => {
  const navigate = useNavigate();

  const handleBooking = (event) => {
  navigate(`/user/dashboard/book/${event.name}`, {
    state: event,
  });
};

  return (
    <div className="px-5 py-10">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-[url('https://wallpapercave.com/wp/wp7488230.jpg')] bg-cover bg-center opacity-20 -z-10"></div>

      <h1 className="text-3xl font-bold text-center mb-8">Our Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Music Concert */}
        <EventCard
          img="https://cdn10.phillymag.com/wp-content/uploads/sites/3/2018/11/live-music-bbt-pavilion-1024x683.jpg"
          title="Music Concert"
          desc="A grand evening filled with soulful music and unforgettable performances."
          date="25th Dec 2025"
          time="7:00 PM"
          venue="Convention Center"
          price={999}
          onBook={handleBooking}
        />

        {/* Tech Conference */}
        <EventCard
          img="https://cdn.tech.eu/uploads/2018/04/infoshare-pic.jpg"
          title="Tech Conference"
          desc="Meet innovators and experience the future of technology."
          date="15th Dec 2025"
          time="9:00 AM"
          venue="Tech Hub"
          price={1499}
          onBook={handleBooking}
        />

        {/* Comedy */}
        <EventCard
          img="https://images.squarespace-cdn.com/content/v1/5b99bf7fc258b451bdc4fb54/268ceb67-e529-4d3f-8e42-dffd8276b301/Eli+packed+house.jpeg"
          title="Stand-Up Comedy"
          desc="A laughter-filled night with top comedians."
          date="10th Dec 2025"
          time="6:00 PM"
          venue="Comedy Club"
          price={799}
          onBook={handleBooking}
        />

        {/* Food Fest */}
        <EventCard
          img="https://iorbitnews.com/wp-content/uploads/2022/09/1.jpg"
          title="Food Festival"
          desc="Enjoy delicious food and vibrant culture."
          date="8th Dec 2025"
          time="12:00 PM"
          venue="Food Park"
          price={499}
          onBook={handleBooking}
        />

        {/* Art Exhibition */}
        <EventCard
          img="https://d197irk3q85upd.cloudfront.net/catalog/product/e/x/exhibition_banner_1.jpg"
          title="Art Exhibition"
          desc="Explore stunning artworks and creativity."
          date="5th Dec 2025"
          time="10:00 AM"
          venue="Art Gallery"
          price={200}
          onBook={handleBooking}
        />

        {/* Sports */}
        <EventCard
          img="https://thumbs.dreamstime.com/b/sports-championship-golden-cup-background-stadium-sports-championship-golden-cup-background-stadium-created-273032920.jpg"
          title="Sports Championship"
          desc="Witness thrilling sports action."
          date="12th Dec 2025"
          time="8:00 PM"
          venue="Sports Stadium"
          price={1299}
          onBook={handleBooking}
        />

      </div>
    </div>
  );
};

const EventCard = ({ img, title, desc, date, time, venue, price, onBook }) => (
  <div className="text-center p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
    <img src={img} className="w-full h-48 object-cover rounded-xl" alt={title} />
    <p className="mt-3 border-2 border-blue-400 p-2 rounded-lg">
      <strong>{title}</strong><br />
      {desc}
      <p className="text-left">Date: {date}</p>
      <p className="text-left">Time: {time}</p>
      <p className="text-left">Venue: {venue}</p>
    </p>
    <button
      onClick={() =>
        onBook({ name: title, date, time, venue, price })
      }
      className="mt-3 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-300"
    >
      Book Now – ₹{price}
    </button>
  </div>
);

export default BrowseEvents;
