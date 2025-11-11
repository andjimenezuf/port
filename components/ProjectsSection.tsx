import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "FairFlow – HackPrinceton",
    description:
      "Built a community micro-lending platform that explains credit risk via AI clarity scores and public accountability, integrating Grok AI to analyze 200+ transactions and generate merchant-specific credit narratives.",
    timeline: "November 2025",
    tags: ["FastAPI", "React", "xAI API", "Kotlin", "Winner – Use of Vibe Kanban"],
  },
  {
    name: "Sherpa – HackHarvard",
    description:
      "Improved web accessibility for 100+ visually-impaired users by automating Gemini-based summaries of complex webpages, cutting DOM analysis latency from 10s to 4.8s with async streaming.",
    timeline: "October 2025",
    tags: ["JavaScript", "FastAPI", "HTML", "CSS", "Google APIs"],
  },
  {
    name: "EduAdvisor – Personal Project",
    description:
      "Built an AI advisor that analyzes 5+ majors and 100+ prerequisite courses, generating personalized pipelines and GPT-based insights for MongoDB-backed agent tools.",
    timeline: "September 2025",
    tags: ["React", "TypeScript", "FastAPI", "MongoDB", "Google ADK"],
  },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="flex flex-col h-full">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 gap-6 h-full">
                  <div className="w-full">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    ) : (
                      <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-base-content/80 min-h-[220px] flex items-center justify-center text-center">
                        <div>
                          <p className="font-semibold">Visual coming soon</p>
                          <p className="text-sm">{project.name}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full flex flex-col flex-1">
                    <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
                    {project.timeline && (
                      <p className="text-sm text-base-content/60 mb-2">{project.timeline}</p>
                    )}
                    <p className="text-base md:text-lg leading-relaxed mb-4 text-white/80">
                      {project.description}
                    </p>
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs rounded-full border border-white/10 bg-base-100/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-row align-bottom space-x-4 mt-auto">
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
