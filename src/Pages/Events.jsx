import React from "react";
import { useNavigate } from "react-router-dom";

const Events = () => {
 
  return (
    <div className="px-5 py-10">
       <div className=" fixed top-0 left-0 bottom-1 w-full h-full bg-[url('https://wallpapercave.com/wp/wp7488230.jpg')]
  bg-cover bg-center  opacity-20  -z-10">
      </div>
      
      <h1 className="text-3xl font-bold text-center mb-8">Our Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

       
        <div className="text-center p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            className="w-full h-48 object-cover rounded-xl"
            src="https://cdn10.phillymag.com/wp-content/uploads/sites/3/2018/11/live-music-bbt-pavilion-1024x683.jpg"
            alt="Music Concert"
          />
          <p className="mt-3 border-2 border-blue-400 p-2 rounded-lg">
            <strong>Music Concert</strong><br />
            A grand evening filled with soulful music, lights, and unforgettable live performances.
            <p className="px-4 text-left">Date: 25th Dec 2025</p>
            <p className="px-4 text-left">Time: 7:00 PM</p>
            <p className="px-4 text-left">Venue: Convention Center</p>
          </p>
          <button
            onClick={() => handleBooking("Music Concert", 999)}
            className="mt-3 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-300"
          >
            Book Now – ₹999
          </button>
        </div>

        {/* Tech Conference */}
        <div className="text-center p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            className="w-full h-48 object-cover rounded-xl"
            src="https://cdn.tech.eu/uploads/2018/04/infoshare-pic.jpg"
            alt="Tech Conference"
          />
          <p className="mt-3 border-2 border-blue-400 p-2 rounded-lg">
            <strong>Tech Conference</strong><br />
            Meet innovators, explore new technologies, and experience the future of tech.
            <p className="px-4 text-left">Date: 15th Dec 2025</p>
            <p className="px-4 text-left">Time: 9:00 AM</p>
            <p className="px-4 text-left">Venue: Tech Hub</p>
          </p>
          <button
            onClick={() => handleBooking("Tech Conference", 1499)}
            className="mt-3 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-300"
          >
            Book Now – ₹1499
          </button>
        </div>

        {/* Stand-Up Comedy */}
        <div className="text-center p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            className="w-full h-48 object-cover rounded-xl"
            src="https://images.squarespace-cdn.com/content/v1/5b99bf7fc258b451bdc4fb54/268ceb67-e529-4d3f-8e42-dffd8276b301/Eli+packed+house.jpeg"
            alt="Comedy Show"
          />
          <p className="mt-3 border-2 border-blue-400 p-2 rounded-lg">
            <strong>Stand-Up Comedy</strong><br />
            A laughter-filled night featuring top comedians and unlimited fun.
            <p className="px-4 text-left">Date: 10th Dec 2025</p>
            <p className="px-4 text-left">Time: 6:00 PM</p>
            <p className="px-4 text-left">Venue: Comedy Club</p>
          </p>
          <button
            onClick={() => handleBooking("Stand-Up Comedy", 799)}
            className="mt-3 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-300"
          >
            Book Now – ₹799
          </button>
        </div>

        {/* Food Festival */}
        <div className="text-center p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            className="w-full h-48 object-cover rounded-xl"
            src="https://iorbitnews.com/wp-content/uploads/2022/09/1.jpg"
            alt="Food Fest"
          />
          <p className="mt-3 border-2 border-blue-400 p-2 rounded-lg">
            <strong>Food Festival</strong><br />
            Enjoy global cuisines, delicious street food, and a vibrant cultural atmosphere.
            <p className="px-4 text-left">Date: 8th Dec 2025</p>
            <p className="px-4 text-left">Time: 12:00 PM</p>
            <p className="px-4 text-left">Venue: Food Park</p>
          </p>
          <button
            onClick={() => handleBooking("Food Festival", 499)}
            className="mt-3 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-300"
          >
            Book Now – ₹499
          </button>
        </div>

        <div className="text-center p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
           <img 
           className="w-full h-48 object-cover rounded-xl" 
           src="https://d197irk3q85upd.cloudfront.net/catalog/product/e/x/exhibition_banner_1.jpg" 
           alt="Art Exhibition" /> 
           <p className="mt-3 border-2 border-blue-400 p-2 rounded-lg"> 
            <strong>Art Exhibition</strong><br /> 
            Explore stunning artworks and creativity from new talents across the city.<br /> 
            <p className="px-4 items-start text-left"> Date: 5th Dec 2025 </p>
             <p className="px-4 items-start text-left"> Time: 10:00 AM</p>
              <p className="px-4 items-start text-left"> Venue: Art Gallery</p>
               </p>
                <button
                 onClick={() => handleBooking("Art Gallery", 200)}
                 className="mt-3 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-300"> 
                   Book Now – ₹200</button> 
                 </div>

        {/* Sports Championship */}
        <div className="text-center p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <img
            className="w-full h-48 object-cover rounded-xl"
            src="https://thumbs.dreamstime.com/b/sports-championship-golden-cup-background-stadium-sports-championship-golden-cup-background-stadium-created-273032920.jpg"
            alt="Sports Championship"
          />
          <p className="mt-3 border-2 border-blue-400 p-2 rounded-lg">
            <strong>Sports Championship</strong><br />
            Witness an exciting competition full of energy and action.
            <p className="px-4 text-left">Date: 12th Dec 2025</p>
            <p className="px-4 text-left">Time: 8:00 PM</p>
            <p className="px-4 text-left">Venue: Sports Stadium</p>
          </p>
          <button
            onClick={() => handleBooking("Sports Championship", 1299)}
            className="mt-3 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-300"
          >
            Book Now – ₹1299
          </button>
        </div>

      </div>
    </div>
  );
};

export default Events;
