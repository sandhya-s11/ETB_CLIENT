import React from 'react';
import { Link } from 'react-router-dom'

import  SplitText from './SplitText/SplitText'



const Header = () => {

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  }; 

  return (
    <header className="relative h-48 w-full">
     
      <img
        src="https://wallpapercave.com/wp/wp7488228.jpg"
        alt="Event Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      
      <div className="absolute inset-0 bg-opacity-40"></div>

      
      <div className="relative z-10 flex items-center justify-between h-full px-8">
        
        <div className="flex grow items-center">
          <img
            src='./public/logo.png'  
            alt="TicetHub Logo"
            className="w-30 h-30 object-cover rounded-full mt-0 mr-0"
          />


          
           <h1 className="ml-100 text-white text-3xl font-bold"><strong >
             <SplitText
            text=" TICKET HUB"
            className="text-6xl font-semibold text-center text-white"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
            </strong></h1> 
        </div>

        <ul className="py-7 flex justify-center gap-x-8">
          
           <Link to='/'>
            <li className="transition duration-5s ease-in-out  text text-xl hover:text-1l hover:text-amber-600"> Home</li>
          </Link>
          <Link to='/about'>

            <li className="transition duration-5s ease-in-out  text text-xl hover:text-1l  hover:text-amber-600"> About</li></Link>
             <Link to='/events'>
            <li className="transition duration-5s ease-in-out  text text-xl hover:text-1l hover:text-amber-600"> Events</li>
          </Link>
          <Link to='/contact'>

            <li className="transition duration-5s ease-in-out text text-xl hover:text-1l   hover:text-amber-600" > Contact</li></Link>

               <div className="shrink-0 space-x-4">
          <Link to="/login" className="px-4 py-2 bg-pink-300 rounded-2xl hover:bg-pink-200" >
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-pink-500 rounded-2xl hover:bg-pink-200" >
            Signup
          </Link>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
