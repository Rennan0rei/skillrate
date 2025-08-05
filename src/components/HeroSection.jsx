import React from "react";

export default function HeroSection() {
  return (
    <section className="gradient-bg text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Showcase Your Skills. Get Valuable Feedback.
          </h1>
          <p className="text-xl mb-8">
            Share your work with a community that helps you grow through
            ratings, comments, and reactions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
              Upload Your Work
            </button>
            <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-purple-100 transition">
              Explore Community
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20"></div>
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gray-100 p-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-gray-500">skillrate.com/work/example</div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">Sarah's Code Project</h3>
                    <p className="text-sm text-gray-600">JavaScript • 2 days ago</p>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-xs text-purple-800 overflow-x-auto">
                    <code>
{`function calculateRating(ratings) {
  return ratings.reduce((a, b) => a + b, 0) / ratings.length;
}`}
                    </code>
                  </pre>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      JavaScript
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Algorithm
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-star text-yellow-400 mr-1"></i>
                    <span className="text-gray-800 font-bold">4.7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
