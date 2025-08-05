import React from "react";

export default function WorkDetail({ work }) {
  // Espera um objeto `work` com as propriedades similares aos usados antes

  return (
    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden max-w-md mx-auto">
      <div className="bg-gray-100 p-4 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-sm text-gray-500">{work.url}</div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img src={work.userImg} alt="User" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <h3 className="font-bold text-gray-800">{work.title}</h3>
            <p className="text-sm text-gray-600">{work.language} • {work.timeAgo}</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mb-4 overflow-auto max-h-40">
          <pre className="text-xs text-purple-800 whitespace-pre-wrap">{work.code}</pre>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-400 mr-1"></i>
            <span className="text-gray-800 font-bold">{work.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
