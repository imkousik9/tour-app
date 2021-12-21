import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-500 via-green-600 to-blue-500 text-gray-50 py-4 px-5 grid grid-cols-2 gap-y text-base md:text-lg lg:text-xl justify-between">
      <div className="row-start-1 row-end-3 self-center">
        <img
          src="/img/logo-green.png"
          alt="Natours logo"
          className="w-48 lg:w-72"
        />
      </div>
      <ul className="list-none flex content-end">
        <li className="ml-1 lg:ml-3">
          <a
            href="#"
            className="text-gray-200 transition-all duration-200 hover:text-green-400"
          >
            About us
          </a>
        </li>
        <li className="ml-1 lg:ml-3">
          <a
            href="#"
            className="text-gray-200 transition-all duration-200 hover:text-green-400"
          >
            Download apps
          </a>
        </li>
        <li className="ml-1 lg:ml-3">
          <a
            href="#"
            className="text-gray-200 transition-all duration-200 hover:text-green-400"
          >
            Become a guide
          </a>
        </li>
        <li className="ml-1 lg:ml-3">
          <a
            href="#"
            className="text-gray-200 transition-all duration-200 hover:text-green-400"
          >
            Careers
          </a>
        </li>
        <li className="ml-1 lg:ml-3">
          <a
            href="#"
            className="text-gray-200 transition-all duration-200 hover:text-green-400"
          >
            Contact
          </a>
        </li>
      </ul>
      <p className="text-gray-300 justify-self-end">
        &copy; by Kousik Manna. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
