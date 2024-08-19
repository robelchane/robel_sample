"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "A valid email is required.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be in the format 0000000000.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log("Form submitted", formData);
    }
  };

  return (
    <main className="font-serif h-screen overflow-y-auto text-black">
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
            <p className="font-bold">Habesha Tax Consultant</p>
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

      <div className="flex flex-col justify-center items-center mt-40 text-4xl font-bold">
        CONTACT US
        <hr className="w-1/2 border-t-2 border-black mb-5" />
      </div>

      {/* Contact Us Section */}
      <div className="mx-20 p-6">
        <div className="flex justify-around gap-10 m-10">
          {/* Contact Info Box */}
          <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="flex justify-center items-center text-2xl font-bold mb-4">Contact Info</h2>
            <p className="mb-4">
              Fill out the form to the right and become our registered clients. 
              Feel free to call and email whenever you want. 
              We are always available to get in touch with you.
            </p>
            <div className="mb-4">
              <p className="font-bold">Location</p>
              <p>1234 12 Ave SW, Calgary, AB, A1A 1A1</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Phone</p>
              <p>000-000-0000</p>
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p>robel@gmail.com</p>
            </div>
          </div>

          {/* Contact Form Box */}
          <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="flex justify-center items-center text-2xl font-bold mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your First Name"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div className="mb-4">
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your Last Name"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
              <div className="mb-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your Email Address"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your Phone Number"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                  placeholder="Your message here..."
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </form>
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

      <div className="flex justify-between m-3 bg-white">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCopyright} className="w-5"/>          
          <span className="ml-2">Copyright 2024 Habesha Tax Consultant Inc.</span>
        </p>
        <p>Designed by: Robel Chane</p>
      </div>

    </main>
  );
}
