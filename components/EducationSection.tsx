import React from "react"
import Image from "next/image"
import GlassCard from "@/components/glass/GlassCard"

const education = {
  school: "University of Florida",
  location: "Gainesville, FL",
  degree: "Bachelor of Science in Computer Science, Minor in Statistics",
  graduation: "Expected Dec 2026",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Intro to Machine Learning",
    "Intro to Software Engineering",
    "Operating Systems",
    "Computer Networking",
    "Natural Language Processing",
  ],
  affiliations: [
    { name: "AISES", subtitle: "Advancing Indigenous People in STEM", logo: "/aises-logo.png" },
    { name: "ColorStack UF", subtitle: "Diversity in Computing", logo: "/colorstackuf_logo.jpeg" },
    { name: "SHPE", subtitle: "Society of Hispanic Professional Engineers", logo: "/shpe-logo.png" },
    { name: "SEO Career", subtitle: "Career Prep Fellow", logo: "/seo-career.png" },
  ],
}

const EducationSection = () => {
  return (
    <section id="education" className="my-10">
      <h1 className="text-center font-bold text-4xl mb-6">
        Education
        <hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded" />
      </h1>
      <GlassCard
        variant="intense"
        intensity="strong"
        interactive
        useAdvancedEffects={true}
        mouseTracking={true}
        className="text-white"
      >
        <div className="p-6 space-y-6 text-white">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">{education.school}</h2>
              <p className="text-white/70">{education.degree}</p>
            </div>
            <div className="text-white/70 text-sm md:text-right">
              <p>{education.location}</p>
              <p>{education.graduation}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 text-white">Relevant Coursework</h3>
              <ul className="space-y-1 text-sm text-white/80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {education.coursework.map((course) => (
                  <li key={course} className="border border-white/10 rounded-lg px-3 py-2 bg-base-300/40">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-white">Clubs & Affiliations</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {education.affiliations.map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-16 h-16 rounded-lg border border-white/10 bg-white/10 flex items-center justify-center overflow-hidden">
                      {item.logo ? (
                        <Image src={item.logo} alt={`${item.name} logo`} width={48} height={48} className="object-contain" />
                      ) : (
                        <span className="text-xs text-white/60">Coming Soon</span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-white">{item.name}</p>
                    {item.subtitle && (
                      <p className="text-[11px] text-white/70">{item.subtitle}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  )
}

export default EducationSection
