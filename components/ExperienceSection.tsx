// components/ExperienceSection.tsx
import React from "react";
import Image from "next/image";
import GlassCard from "@/components/glass/GlassCard"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "JPMorgan Chase & Co.",
    location: "New York City, NY",
    duration: "June 2025 - August 2025",
    description: "Integrated AI agents into JPMC’s investment platform to streamline risk analysis, cutting review time ~40%.",
    logo: "/jpmorganchase_logo.jpeg",
  },
  {
    title: "AI Software Engineer Intern",
    company: "Advantech",
    location: "Tokyo, Japan",
    duration: "February 2025 - May 2025",
    description: "Built a real-time computer vision system using NVIDIA frameworks and architected a multilingual AI assistant pipeline, which was showcased in a tech demo at Japan IT Week.",
    logo: "/advantech_logo.jpeg",
  }
  // Add more experience items as needed ToDo: Add more experience items
];


const ExperienceSection = () => {
  return (
    <section id="experience" className="my-10">
      <h1 className="text-center font-bold text-4xl mb-6">Experience</h1>
      <hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {experiences.map((experience, idx) => (
          <GlassCard
            key={idx}
            variant="intense"
            intensity="strong"
            interactive
            specular
            useAdvancedEffects={true}
            mouseTracking={true}
            className="h-full text-base-content transform transition duration-500 hover:scale-105"
          >
            <div className="flex h-full flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <div className="relative w-20 h-20 bg-base-100 rounded-lg shadow-md flex items-center justify-center overflow-hidden">
                  <div className="relative w-16 h-16">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold">{experience.title}</h2>
                <h3 className="text-xl text-base-content/70">{experience.company}</h3>
                {experience.location && (
                  <p className="text-sm text-base-content/60">{experience.location}</p>
                )}
                <p className="text-sm text-base-content/60">{experience.duration}</p>
              </div>
              <p className="text-base text-base-content/80 leading-relaxed flex-1">
                {experience.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};


export default ExperienceSection;
