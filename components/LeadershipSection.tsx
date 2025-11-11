import React from "react"
import GlassCard from "@/components/glass/GlassCard"

const leadership = [
  {
    title: "Peer Mentor – Miami Dade College Cloud Computing Center",
    location: "Miami, FL",
    duration: "Dec 2023 – Dec 2023",
    bullets: [
      "Mentored 20 high school students through an AWS certification boot camp",
      "Achieved an 80% pass rate by leading hands-on labs and simplifying complex cloud concepts",
    ],
  },
]

const LeadershipSection = () => {
  return (
    <section id="leadership" className="my-10">
      <h1 className="text-center font-bold text-4xl mb-6">
        Leadership & Professional Development
        <hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded" />
      </h1>
      <div className="space-y-6">
        {leadership.map((role, idx) => (
          <GlassCard
            key={idx}
            variant="intense"
            intensity="strong"
            interactive
            useAdvancedEffects={true}
            mouseTracking={true}
            className="text-base-content"
          >
            <div className="p-6 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">{role.title}</h2>
                  <p className="text-base-content/70 text-sm">{role.location}</p>
                </div>
                <p className="text-base-content/60 text-sm">{role.duration}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-base-content/80">
                {role.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}

export default LeadershipSection
