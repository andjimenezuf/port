import React from "react"
import SlideUp from "./SlideUp"
import Image from "next/image"

const awards = [
  {
    title: "Hispanic Scholarship Fund Scholar",
    organization: "Hispanic Scholarship Fund",
    year: "2024",
    description: "Selected as a Hispanic Scholarship Fund Scholar, recognizing academic excellence and leadership within the Hispanic community.",
    logo: "/hsf-300x300.jpg",
  },
  {
    title: "Palantir Future Scholar",
    organization: "Palantir Technologies",
    year: "2023",
    description: "Chosen as a Palantir Future Scholar, supporting exceptional students pursuing careers in technology and data science.",
    logo: "/PalantirLogo.avif",
  },
  {
    title: "The Machen Florida Opportunity Scholar",
    organization: "University of Florida",
    year: "2022",
    description: "Awarded the prestigious Machen Florida Opportunity Scholarship, supporting first-generation students at the University of Florida.",
    logo: "/MFOSLogo.png",
  },
]

const AwardsSection = () => {
  return (
    <section id="awards">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Awards & Scholarships
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-y-0 md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, idx) => (
              <SlideUp key={idx} offset="-300px 0px -300px 0px">
                <div className="animate-slideUpCubiBezier animation-delay-2 h-full">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full transform transition duration-500 hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-20 h-20 bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center overflow-hidden">
                        <div className="relative w-16 h-16">
                          <Image
                            src={award.logo}
                            alt={`${award.organization} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm font-semibold">{award.year}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">
                      {award.title}
                    </h2>
                    <h3 className="text-lg font-semibold mb-4 text-gray-600 dark:text-gray-300">
                      {award.organization}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {award.description}
                    </p>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwardsSection 