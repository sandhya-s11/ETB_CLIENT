import React from "react";
import {Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="w-full">

        <div className=" fixed top-0 left-0 bottom-1 w-full h-full bg-[url('https://wallpapercave.com/wp/wp7488230.jpg')]
  bg-cover bg-center  opacity-20  -z-10">
      </div>
      <section className="px-10 py-20 flex flex-col md:flex-row justify-between items-center">

        
        <div className="md:w-1/2 ">
          <h1 className="text-5xl font-bold leading-tight">
            Your Smart Event Ticketing Platform for <br />
            <div className="text-pink-600">
              Effortless Booking & Management
            </div>
          </h1>

          <p className="text-lg pt-4 text-gray-700 ">
            Book, Manage & Experience Events Seamlessly — A complete system for
            handling all your event ticketing needs across{" "}
            <strong>6+ unique events</strong>.
          </p>

          <p className="text-lg pt-4 pb-4 font-semibold text-pink-600">
            Simple • Fast • Hassle-Free Booking!
          </p>

         
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-lg">
            <li>▶ Instant ticket booking</li>
            <li>▶ Clear event details & schedules</li>
            <li>▶ Secure login for users & admins</li>
            <li>▶ No hidden charges</li>
            <li>▶ Real-time ticket availability</li>
            <li>▶ 6+ event categories supported</li>
          </ul>

          
          <div className="flex gap-4 pt-4">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-700 transition">
              Book Now
            </button>
            <Link to= "/events">
            <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-50 transition">
              Explore Events
            </button>
            </Link>
          </div>
        </div>

       
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src='./public/events.png'
            alt="Events Collage"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />
        </div>

      </section>
    </div>
  );
};

export default Home;
