"use client";
import Image from "next/image";

export default function AboutMe() {
  const contactItems = [
    { icon: "✉️", label: "Email", value: "saji2000928@gmail.com", href: "mailto:saji2000928@gmail.com" },
    { icon: "📞", label: "Phone", value: "+94 76 132 2172", href: "tel:+94761322172" },
    { icon: "📍", label: "Location", value: "Sri Lanka", href: "#" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/mr-saji", href: "https://linkedin.com/in/mr-saji" },
    { icon: "🐙", label: "GitHub", value: "github.com/Saji59", href: "https://github.com/Saji59" },
  ];

  return (
    <section className="border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <Image
                src="/images/home/about-me/about-img.png.png"
                alt="Raju Sajinath"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 60%" }}
              />
            </div>
          </div>
          
        
        <div className="flex-1">
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
  <p className="text-gray-600 dark:text-gray-400 mb-4">
    Frontend Developer with 2 years of commercial experience across 3 companies, 
    specialising in React.js and full-stack SaaS engineering. Proficient in React.js, 
    Redux, Tailwind CSS, JavaScript, Node.js, and REST API design. Delivered 
    production-grade features including AI-powered automation modules and real-time 
    data systems.
  </p>
<p className="text-gray-600 dark:text-gray-400 mb-8">
    Skilled in SQL, data analysis, and API integration with a strong focus on 
    building scalable, high-performance web applications. Experienced in delivering 
    production-grade features and passionate about full-stack development.
</p>
            
            {/* Contact Grid - Portfolio removed */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.label !== "Location" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{item.label}</p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors truncate max-w-[200px]">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}