import React from 'react';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 5,
            comment: 'Great work on the dark mode implementation! The transition is smooth and the color scheme is easy on the eyes.'
        },
        {
            name: 'Alex Chen',
            image: 'https://randomuser.me/api/portraits/men/22.jpg',
            rating: 4.5,
            comment: 'The charts are really well done. One suggestion: consider adding tooltips with more detailed information when hovering over data points.'
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Community Testimonials</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                            <div className="flex items-center mb-4">
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                                    <div className="flex text-yellow-400">
                                        {Array.from({ length: Math.floor(item.rating) }, (_, i) => (
                                            <i key={i} className="fas fa-star"></i>
                                        ))}
                                        {item.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700">{item.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
