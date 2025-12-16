import React from 'react';


const About = () => {
  return (
    <div>

       <div className=" fixed top-0 left-0 bottom-1 w-full h-full bg-[url('https://wallpapercave.com/wp/wp7488230.jpg')]
  bg-cover bg-center  opacity-20  -z-10">
      </div>

      <div className="text-4xl font-bold text-center text-gray-900 pt-16 pb-6">
        ABOUT
      </div>


      <p className="text-lg max-w-2xl mx-auto mb-12 px-6 text-center font-serif leading-relaxed">
        TicketHub is a modern event ticketing platform made to simplify event booking.<br />
        Discover, explore, and book tickets for your favorite events with ease. Make your
        special by choosing any of our provided events ❤.
      </p>


      <div>
        <img
          src='./public/about.jpg'
          alt="Event Image"
          className="w-full h-60 object-cover"
        />
      </div>

     


      <div  >
        <p className="text-4xl pl-19 pt-16 pb-3 font-bold">What We Do</p>
      </div>
      <div className="flex flex-col md:flex-row  justify-between px-4 py-10 gap-10">
      <p className="pt-4 pl-17 pb-15 text-lg/7 text-bold font-serif">
        TicketHub is designed to make event discovery and ticket booking simple, fast, and enjoyable for every user.
        We bring together six unique events on one platform, offering clear details,real-time availability, and a <br />
        smooth booking experience.Our system ensures that users can explore, choose, and book their preferred events <br />
        with complete ease. Behind the platform, our admin dashboard manages events, updates, and bookings efficiently <br />
        to keep everything running seamlessly. We focus on clarity, convenience, and reliability in every feature we provide.<br />
        With TicketHub, experiencing your favorite events becomes effortless and more exciting than ever.
      </p>
      <div className="md:w-1/2 flex justify-center">
        <img src="https://www.eventplus.co.in/wp-content/uploads/2024/01/Frame-3.png" className="w-screen h-70 object-cover rounded-lg shadow-md" />
      </div>
      </div>

      <div className="w-full h-40 bg-pink-600">
        
  <p className="text-white text-5xl font-serif justify-center pt-12 pl-15 px-3 py-3"> Looking for Booking an Event?</p>
 
      </div>
     
    </div>
  );
};

export default About;
