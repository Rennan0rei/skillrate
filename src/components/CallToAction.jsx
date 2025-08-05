import React from "react";

export default function CallToAction() {
  return (
    <section className="py-12 bg-purple-700 text-white text-center rounded-lg mx-4 my-12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-6 text-lg">Upload your work and join our creative community today!</p>
      <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
        Upload Now
      </button>
    </section>
  );
}
