import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Jessica T.",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    stars: 5,
    text:
      "The feedback I received on my UI designs helped me land my first freelance client. The community is incredibly supportive!",
  },
  {
    id: 2,
    name: "Marcus L.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    stars: 5,
    text:
      "As a beginner programmer, the detailed code reviews have been invaluable for improving my skills faster than I thought possible.",
  },
  {
    id: 3,
    name: "Emily R.",
    img: "https://randomuser.me/api/portraits/women/62.jpg",
    stars: 5,
    text:
      "SkillRate gave me the confidence to share my writing and helped me grow as an author through the community's constructive critiques.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What Our Community Says
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, img, stars, text }) => (
            <div key={id} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <img
                  src={img}
                  alt={name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{name}</h4>
                  <div className="flex">
                    {[...Array(stars)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
