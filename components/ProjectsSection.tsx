import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Currency Convertor",
    description:
      "Developed an iOS application using Swift that allows users to convert currencies in real-time. The app integrates with ExchangeRateAPI and the FlagsAPI, supporting multiple currencies for accurate and quick conversions.",
    image: "/CConvertor.png",
    github: "https://github.com/andjimenezuf/CConvertor",
    // link: 
  },
  {
    name: "Ace Expense",
    description:
      "Streamlined solution for managing personal finances, built using components from Shadcn UI and Drizzle ORM, with a Neon database backed by PostgreSQL and powered by Next.js.",
    image: "/aceExpense.jpeg",
    link: "https://aceexpense-andres-joses-projects.vercel.app/",
    // link: """
  },
  {
    name: "Investi Track",
    description:
      "Implemented a stock search and visualizer using Next.js, Next.UI and the AlphaVantage API. Exploring the integration of machine learning for price prediction.",
    image: "/investi2.png",
    link: "https://investyyv2.vercel.app/",
    github: "https://github.com/andjimenezuf/Investyy",
  },
  {
    name: "Fruit Image Mold Detector",
    description: "Leveraged TensorFlow and a pre-trained ImageNet model to identify mold on fruits with 97% validation accuracy.",
    image: "/moldDetector.png",
    github: "https://github.com/andjimenezuf/MoldFruitDetector",
    //link: 
  },
  {
    name: "Musicales Jimenez",
    description:
      "An interactive multi-page music store simulation featuring live shopping cart calculations and inventory management using SQL.",
    image: "/music.png",
    github: "https://github.com/andjimenezuf/Musicales/",
    link: "https://andjimenezuf.github.io/Musicales/"
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-purple-400 border-0 rounded"></hr>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="flex flex-col">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2">
                  {/* Project Name */}
                  <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
                  
                  {/* Project Image */}
                  <div className="md:w-full">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
