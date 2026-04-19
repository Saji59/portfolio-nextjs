"use client";
import Image from "next/image";

export default function LatestWork() {
  const projects = [
    { 
      title: "React E-Commerce Store", 
      category: "Frontend / E-Commerce", 
      image: "/images/home/work/ecommerce.jpg.webp",
      emoji: "🛒", 
      featured: true,
      tech: ["React", "Redux", "Tailwind CSS"]
    },
    { 
      title: "IoT Smart Pot", 
      category: "IoT / React", 
      image: "/images/home/work/iot-pot.jpg.webp",
      emoji: "🪴", 
      featured: false,
      tech: ["IoT", "React", "C++"]
    },
    { 
      title: "Gas Distribution System", 
      category: "Mobile App", 
      image: "/images/home/work/gas-system.jpg.png",
      emoji: "⛽", 
      featured: false,
      tech: ["React Native", "Firebase", "REST API"]
    },
    { 
      title: "Chat Assistance", 
      category: "AI / NLP", 
      image: "/images/home/work/chat-bot.jpg.webp",
      emoji: "💬", 
      featured: false,
      tech: ["Python", "NLP", "APIs"]
    },
    { 
      title: "Nike MERN App", 
      category: "Full Stack", 
      image: "/images/home/work/nike-app.jpg.png",
      emoji: "👟", 
      featured: false,
      tech: ["MongoDB", "Express.js", "React"]
    },
    { 
      title: "Java Projects", 
      category: "Backend", 
      image: "/images/home/work/java.jpg.jpg",
      emoji: "☕", 
      featured: false,
      tech: ["Java", "OOP", "Data Structures"]
    },
  ];

  return (
    <section className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-6 mb-10">
          <h2 className="text-gray-900 dark:text-white">Latest Works</h2>
          <span className="text-primary text-xl">( 06 )</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-xl border ${
                project.featured 
                  ? 'border-primary shadow-lg ring-1 ring-primary/20' 
                  : 'border-gray-200 dark:border-gray-800'
              } bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300`}
            >
              {project.featured && (
                <div className="absolute top-3 right-3 z-20 bg-primary text-white text-xs px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
              
              <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const emojiDiv = document.createElement('div');
                      emojiDiv.className = 'w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-orange-100 to-orange-50 dark:from-gray-800 dark:to-gray-700';
                      emojiDiv.textContent = project.emoji;
                      parent.appendChild(emojiDiv);
                    }
                  }}
                />
              </div>
              
              <div className="p-5">
                <span className="text-xs text-primary bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="font-bold text-lg mt-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}