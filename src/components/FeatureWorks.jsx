import React from 'react';

export default function FeaturedWorks() {
    const works = [
        {
            title: 'React Dashboard Project',
            description: 'A responsive admin dashboard built with React and TailwindCSS featuring interactive charts and dark mode.',
            tags: ['React', 'TailwindCSS', 'UI/UX'],
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: '4.8',
            reviews: 24
        },
        {
            title: 'Portfolio Website',
            description: 'A modern personal portfolio showcasing projects and blogs with a clean UI and animations.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://randomuser.me/api/portraits/women/45.jpg',
            rating: '4.6',
            reviews: 18
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Works</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {works.map((work, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden work-card transition transform hover:-translate-y-2">
                            <div className="p-6 border-b">
                                <div className="flex items-start">
                                    <img src={work.image} alt="User" className="w-14 h-14 rounded-full mr-4" />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">{work.title}</h3>
                                        <p className="text-gray-600 mb-3">{work.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {work.tags.map((tag, idx) => (
                                                <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <div className="flex items-center text-yellow-400">
                                    <i className="fas fa-star mr-1"></i>
                                    <span className="font-bold text-gray-800">{work.rating}</span>
                                    <span className="text-gray-500 ml-1">({work.reviews} ratings)</span>
                                </div>
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
