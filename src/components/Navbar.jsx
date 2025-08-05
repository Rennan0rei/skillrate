import React from "react";

export default function Navbar() {
  return (
    <nav className="gradient-bg text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="fas fa-star text-yellow-300 text-2xl"></i>
          <h1 className="text-2xl font-bold">SkillRate</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-200 transition">Home</a>
          <a href="#" className="hover:text-yellow-200 transition">Explore</a>
          <a href="#" className="hover:text-yellow-200 transition">Categories</a>
          <a href="#" className="hover:text-yellow-200 transition">Upload</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition">Sign In</button>
          <button className="hidden md:block bg-purple-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-900 transition">Sign Up</button>
          <button className="md:hidden text-white">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
