import React from 'react';
import logo from '/xeople-logo.svg'; // Using xeople-logo as logo



const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Job Finder</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="What job are you looking for?"
            className="p-2 rounded text-black"
          />
          <input
            type="text"
            placeholder="Enter city, state, or region"
            className="p-2 rounded text-black"
          />
          <button className="bg-pink-500 px-4 py-2 rounded">Search</button>
        </div>
      </header>
  );
};

export default Header;
