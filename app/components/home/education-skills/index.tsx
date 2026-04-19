export default function EducationSkills() {
  const education = [
    { degree: "BEng (Hons) in Software Engineering", uni: "London Metropolitan University", year: "Sep 2024 - Sep 2025" },
    { degree: "BTEC Level 5 HND in Computing", uni: "BCAS", year: "Jan 2021 - Aug 2024" },
  ];

  const skills = [
    { name: "React", level: 5, emoji: "⚛️" },
    { name: "JavaScript", level: 5, emoji: "📜" },
    { name: "Python", level: 5, emoji: "🐍" },
    { name: "Node.js", level: 4, emoji: "🟢" },
    { name: "SQL", level: 5, emoji: "🗄️" },
    { name: "Git/GitHub", level: 5, emoji: "📦" },
  ];

  return (
    <section className="border-t border-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-10">
          <h2>Education & Skills</h2>
          <span className="text-primary text-xl">( 06 )</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.uni}</p>
                  <p className="text-sm text-gray-400">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-4 border rounded-lg text-center hover:shadow-lg transition">
                <div className="text-4xl mb-2">{skill.emoji}</div>
                <p className="font-medium">{skill.name}</p>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full ${i < skill.level ? "bg-primary" : "bg-gray-200"}`}></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}