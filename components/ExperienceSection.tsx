// components/ExperienceSection.tsx
import React from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "JPMorgan Chase & Co.",
    duration: "June 2025 - August 2025",
    description: "Integrating transformer-based sentiment analysis and LangChain APIs ",
    logo: "/jpmorganchase_logo.jpeg",
  },
  {
    title: "AI Software Engineer Intern",
    company: "Advantech",
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
      <hr className="w-6 h-1 mx-auto my-4 bg-blue-900 border-0 rounded"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {experiences.map((experience, idx) => (
          <div key={idx} className="flex flex-col p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={100}
              height={100}
              className="mb-2"
            />
            <h2 className="text-2xl font-semibold">{experience.title}</h2>
            <h3 className="text-xl text-gray-600">{experience.company}</h3>
            <p className="text-sm text-gray-500">{experience.duration}</p>
            <p className="mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default ExperienceSection;
