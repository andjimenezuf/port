import React from "react";
import SlideUp from "./SlideUp";
import Image from "next/image";

const experiences = [
  {
    title: "Artificial Intelligence Software Engineering Intern",
    company: "Advantech",
    location: "Tokyo, Japan",
    date: "Feb 2025 - May 2025",
    logo: "/Advantech-Logo.jpg",
    description: [
      "Engineered a real-time YOLO-based object detection solution on a Linux-powered NVIDIA Jetson AGX Orin platform, leveraging DeepStream, TensorRT, and OpenCV to deliver robust machine learning inference",
      "Architected an internal document retrieval platform using machine learning techniques—including Large Language Models and Retrieval Augmentation Generation—with Python microservices to optimize data extraction",
    ],
  },
  // Add more experiences as needed
];

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-full">
            {experiences.map((exp, idx) => (
              <div key={idx} className="mb-12">
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="animate-slideUpCubiBezier animation-delay-2">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className="relative w-20 h-20 bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center overflow-hidden mr-4">
                          <div className="relative w-16 h-16">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">
                            {exp.title}
                          </h2>
                          <h3 className="text-xl font-semibold mt-2">
                            {exp.company} - {exp.location}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-500 font-semibold md:text-right">{exp.date}</p>
                    </div>
                    <ul className="mt-4 list-disc list-inside">
                      {exp.description.map((item, itemIdx) => (
                        <li key={itemIdx} className="mb-2 text-gray-600 dark:text-gray-400">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SlideUp>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 