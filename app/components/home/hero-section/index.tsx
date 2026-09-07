"use client";
import Image from "next/image";

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SAJINATH-RAJU.pdf";
    link.download = "SAJINATH-RAJU.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <h1>I'm RAJU SAJINATH</h1>
              <span className="wave text-5xl">👋</span>
            </div>
            <h1 className="text-primary mt-2">Software Engineer</h1>
            <p className="text-secondary text-lg mt-6 max-w-xl mx-auto lg:mx-0">
              Frontend Developer with 2 years of commercial experience in React.js
              and full-stack SaaS engineering. Delivered production-grade features
              including AI-powered automation modules and real-time data systems.
            </p>
            <button 
              onClick={handleDownload}
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/80 transition-colors mt-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <Image
                src="/images/home/banner/my-photo.jpg.JPG"
                alt="Raju Sajinath"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}