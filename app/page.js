import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
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
              <Link href="./">Home</Link>
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
      <div className="relative mt-20 bg-cover bg-center" 
        style={{ backgroundImage: "url('/home.jpg')", height: "170vh" }}>
          <div className="absolute inset-0 flex items-start justify-center mx-5 text-black flex-col">
            <p className="text-4xl mx-5">SEEKING ONE OF THE BEST</p>
            <p className="text-4xl font-bold m-5">TAX CONSULTANT IN CALGARY?</p>
            <p className="m-5 text-2xl font-bold">Habesha Tax Consultant is an accounting <br />
              and advisory firm based in Calgary here to help. Call now!</p>
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
