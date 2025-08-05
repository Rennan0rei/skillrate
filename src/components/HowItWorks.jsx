import React from "react";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          How SkillRate Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-upload text-white text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Upload Your Work</h3>
            <p className="text-gray-600">
              Share your projects, whether it's code, designs, writing, or any
              creative work.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-comments text-white text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Get Feedback</h3>
            <p className="text-gray-600">
              Receive ratings, detailed comments, and reactions from the
              community.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-chart-line text-white text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Improve & Grow</h3>
            <p className="text-gray-600">
              Use the feedback to refine your skills and create even better work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
