import React from "react";

const works = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "React Dashboard",
    user: "Michael",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg",
    time: "1 day ago",
    description:
      "A responsive admin dashboard built with React and TailwindCSS featuring interactive charts and dark mode.",
    tags: ["React", "TailwindCSS", "UI/UX"],
    likes: 24,
    comments: 8,
    rating: 4.8,
    bgGradient: "from-blue-400 to-purple-500",
  },
  {
    id: 2,
    icon: "fas fa-paint-brush",
    title: "Character Design",
    user: "Emma",
    userImg: "https://randomuser.me/api/portraits/women/68.jpg",
    time: "3 days ago",
    description:
      "Fantasy character concept art for an upcoming game project. Created in Procreate with custom brushes.",
    tags: ["Digital Art", "Character Design", "Concept Art"],
    likes: 42,
    comments: 15,
    rating: 4.9,
    bgGradient: "from-pink-400 to-red-500",
  },
  {
    id: 3,
    icon: "fas fa-book",
    title: "Short Story",
    user: "David",
    userImg: "https://randomuser.me/api/portraits/men/75.jpg",
    time: "5 days ago",
    description:
      "A sci-fi short story about first contact with an alien civilization. 2500 words, looking for feedback on pacing.",
    tags: ["Fiction", "Sci-Fi", "Writing"],
    likes: 18,
    comments: 6,
    rating: 4.5,
    bgGradient: "from-green-400 to-teal-500",
  },
];

export default function FeatureWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Works</h2>
          <a href="#" className="text-purple-600 font-semibold hover:underline">
            View All
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-xl shadow-md overflow-hidden work-card transition duration-300"
            >
              <div
                className={`h-48 bg-gradient-to-r ${work.bgGradient} flex items-center justify-center`}
              >
                <i className={`${work.icon} text-white text-6xl`}></i>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={work.userImg}
                    alt="User"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{work.title}</h3>
                    <p className="text-sm text-gray-600">
                      {work.user} • {work.time}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{work.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <div className="flex items-center text-gray-500">
                      <i className="fas fa-thumbs-up mr-1"></i>
                      <span>{work.likes}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <i className="fas fa-comment mr-1"></i>
                      <span>{work.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-star text-yellow-400 mr-1"></i>
                    <span className="font-bold text-gray-800">{work.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
