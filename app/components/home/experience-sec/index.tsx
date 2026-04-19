export default function ExperienceSec() {
  const experiences = [
    {
      year: "2024",
      title: "Software Engineer Intern",
      company: "DAITONN - Colombo",
      type: "Internship (On-site)",
      desc: "Developed full-stack features using React and .NET. Implemented authentication, REST APIs, and SQL Server."
    },
    {
      year: "2025",
      title: "SEO & Data Analyst",
      company: "FMBS - UK-based Company",
      type: "Remote (Work From Home)",
      desc: "Applied technical SEO strategies, automated data analysis using Python, analyzed Google Analytics data."
    },
    {
      year: "2025-2026",
      title: "Associate Front End React Developer",
      company: "AEIOUVA Company",
      type: "Fulltime (On-site)",
      desc: "Developed dynamic frontend components using React, built backend features with PHP."
    }
  ];

  return (
    <section className="border-t border-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-10">
          <h2>Experience</h2>
          <span className="text-primary text-xl">( 03 )</span>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold">{exp.year}</h3>
                <p className="text-gray-600">{exp.title}</p>
              </div>
              <div>
                <p className="font-semibold">{exp.company}</p>
                <p className="text-sm text-primary">{exp.type}</p>
              </div>
              <div>
                <p className="text-secondary text-sm">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}