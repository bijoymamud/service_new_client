import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#000C2D]">
      <div className="container flex text-[#f8f5f5] flex-col gap-5 justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* Brand */}
        <div className="lg:w-1/3">
          <div className="flex flex-col items-center space-x-4 ">
          <img src="https://i.ibb.co/20mKHM8m/logo-final-2.png" alt="Logo" className="h-32 w-auto" /> 
          <p className='w-11/12 text-[#f8f5f5] mt-3'>The premier global marketplace for buying and selling land properties worldwide.</p>
        </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {/* Product */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
            <ul className="space-y-1">
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
            <ul className="space-y-1">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Developers */}
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">Developers</h3>
            <ul className="space-y-1">
              <li><a href="#">Public API</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Guides</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">Social media</h3>
            <div className="flex space-x-3">
              <FaFacebook size={32} />
              <FaTwitter size={32}/>
             <FaInstagram size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © {new Date().getFullYear()} Company Co. All rights reserved.
      </div> */}
    </footer>
  );
};

export default Footer;
