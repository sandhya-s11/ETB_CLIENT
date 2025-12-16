import React from 'react';

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCreditCard,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" text-gray-700 border-t border-violet-400 border-2 w-full">

      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 pt-10 pb-5">

       
        <div>
          <h3 className="text-lg font-bold hover:text-violet-500 mb-3">Contact us</h3>
          <ul className="space-y-1">
            <li>Customer Support</li>
            <li>Booking Help</li>
            <li>Event Enquiries</li>
          </ul>

          <div className="flex gap-4 mt-4 text-gray-600">
            <i className="fab fa-facebook text-xl"></i>
            <i className="fab fa-twitter text-xl"></i>
            <i className="fab fa-youtube text-xl"></i>
          </div>
        </div>

        
        <div>
          <h3 className="text-lg font-bold hover:text-violet-500 mb-3"> About</h3>
          <ul className="space-y-1">
            <li>About TicketHub</li>
            <li>Our Mission</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold hover:text-violet-500 mb-3">Our Services</h3>
          <ul className="space-y-1">
            <li>Event Listings</li>
            <li>Online Ticket Booking</li>
            <li>Organizer Portal</li>
            <li>Partner with Us</li>
            <li>Security & Support</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-bold hover:text-violet-500 mb-3">Payment Methods</h3>
          <div className="flex gap-4 text-4xl text-gray-700">
            <FaCcVisa className="text-blue-600" />
            <FaCcMastercard className="text-red-600" />
            <FaCcPaypal className="text-blue-400" />
            <FaCreditCard className="text-yellow-500" />
          </div>

        
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm border-t py-4">
       <strong> © 2025 TicketHub. All rights reserved.</strong>
        <br />
       <strong> Powered by Eventro Ticketing Technologies.</strong>
      </div>

    </footer>
  );
};

export default Footer;
