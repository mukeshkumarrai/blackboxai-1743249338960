import React from 'react';
import logo from '/xeople-logo.svg'; // Using xeople-logo as logo



const Header = () => {
  return (
<header className="bg-blue-900 text-white p-6 flex justify-between items-center">

<h1 className="text-2xl font-bold">Job Finder</h1>

        <div className="flex space-x-4">
<input
  type="text"
  placeholder="What job are you looking for?"
  className="p-3 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<input
  type="text"
  placeholder="Enter city, state, or region"
  className="p-3 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Search</button>

        </div>
      </header>
  );
};

export default Header;
