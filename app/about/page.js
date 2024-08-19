"use client";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot,faCopyright } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const circles = [
    {
      title: "Expertise You Can Trust:",
      description: "With years of experience in tax law and accounting, our team stays up-to-date with the latest regulations and strategies.",
    },
    {
      title: "500+ Personal Tax Returns Filed:",
      description: "We have successfully filed over 500 personal tax returns, ensuring maximum refunds and minimal stress for our clients.",
    },
    {
      title: "400 Corporate Tax Returns Managed:",
      description: "Our team has handled over 400 corporate tax returns, helping businesses optimize their tax strategy and stay compliant.",
    },
    {
      title: "Transparent Fees:",
      description: "No hidden costs. We offer clear, upfront pricing so you know what to expect.",
    },
    {
      title: "Satisfaction Guaranteed:",
      description: "Your satisfaction is our priority. We are committed to providing excellent service.",
    },
    {
      title: "Highly Recommended Services:",
      description: "Our clients consistently recommend us for our attention to detail and personalized approach to tax consulting.",
    },
    {
      title: "Satisfaction Guaranteed:",
      description: "Your satisfaction is our priority. We are committed to providing excellent service.",
    },
    {
      title: "Small Business Tax Solutions:",
      description: "Tailored tax solutions for small businesses that help you navigate complex tax laws and regulations.",
    },
    {
      title: "Tax Relief and Resolution:",
      description: "If you’re facing tax debt or other issues, we can help negotiate with the IRS and find a resolution that works for you.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % circles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + circles.length) % circles.length);
  };

  return (
    <main className="font-serif h-screen overflow-y-auto">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex gap-10 m-3">
          <p className="flex gap-2 hover:text-gray-500 hover:underline">
            <a href="tel:000-000-0000" className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="w-5"/>
            <span className="ml-2">Tel: 000-000-0000</span>
            </a>
          </p>
          <p className="flex gap-2 hover:text-gray-500 hover:underline">
            <a href="mailto:robel@gmail.com" className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="w-5"/>
            <span className="ml-2">Email: robel@gmail.com</span>
            </a>
          </p>
        </div>

        <div className="flex justify-between text-2xl font-serif bg-green-500 p-3 text-black">
          <div className="m-3">
            <p className="font-bold hover:text-gray-500 hover:underline">
              <Link href="./">Habesha Tax Consultant</Link>
            </p>
          </div>
          <div className="flex gap-10 m-3">
            <p className="hover:text-gray-500 hover:underline">
              <Link href="/.">Home</Link>
            </p>
            <p className="hover:text-gray-500 hover:underline">
              <Link href="/about">About us</Link>
            </p>
            <p className="hover:text-gray-500 hover:underline">
              <Link href="/service">Services</Link>
            </p>
            <p className="hover:text-gray-500 hover:underline">
              <Link href="/contact">Contact us</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center h-auto pt-32 bg-gray-300">
        <div className="flex flex-col justify-center items-center font-bold m-5">
          <p className="m-5 text-3xl font-bold">Why Choose Us?</p>
          <div className="relative flex items-center">
            <button
              className="absolute left-0 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <div className="flex space-x-4">
              {circles.slice(currentIndex, currentIndex + 1).map((circle, index) => (
                <div key={index} className="w-96 h-96 bg-white border-2 border-gray-300 rounded-full shadow-md flex items-center justify-center p-5 text-center">
                  <div>
                    <p className="text-xl font-semibold">{circle.title}</p>
                    <p className="text-sm mt-2">{circle.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>


      <div className="flex justify-evenly text-lg font-serif bg-green-500 p-3 text-black">
        <div className="m-3">
          <p className="font-bold">Habesha Tax Consultant</p>
          <p>We are tax strategists who recognize <br />
            that small businesses require practical <br />
            solutions to address their toughest <br />
            challenges in today’s business world</p>
        </div>
        <div className="m-3 ">
          <div className="font-bold"> Contact us
            <hr className="flex border-t-2 border-black mb-5" />
          </div>
          <p className="hover:text-gray-500 hover:underline my-3">
            <a href="tel:000-000-0000" className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="w-5"/>
            <span className="ml-2">Tel: 000-000-0000</span>
            </a>
          </p>
          <p className="hover:text-gray-500 hover:underline my-3">
            <a href="mailto:robel@gmail.com" className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="w-5"/>
            <span className="ml-2">Email: robel@gmail.com</span>
            </a>
          </p>
          <p>            
            <span className="flex gap-3 my-3"><FontAwesomeIcon icon={faLocationDot} className="w-5"/>1234 12 Ave SW, Calgary, AB</span>
          </p>
        </div>

        <div className="m-3">
          <div className="font-bold">Working Hours
            <hr className="flex border-t-2 border-black mb-5" />
          </div>
          <p>Monday - Saturday: 8AM to 5PM</p>
          <p>Sunday: Closed</p>           
        </div> 
      </div>

      <div className="flex justify-between m-3">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCopyright} className="w-5"/>          
          <span className="ml-2">Copyright 2024 Habesha Tax Consultant Inc.</span>
        </p>
        <p>Designed by: Robel Chane</p>
      </div>

    </main>
  );
}

