"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  const svgBackgroundPath = '/ccchaos.svg'

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        
            <div 
            className="md:mt-2 md:w-1/2 relative" 
            style={{ 
              backgroundImage: `url(${svgBackgroundPath})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px', 
              height: '400px', 
            }}
          >
            {/* Position headshot with absolute values */}
            <div 
              className="absolute top-200 left-200" 
              style={{
                top: '100px', // 50 pixels from the top of the container
                left: '100px', // 50 pixels from the left of the container
                width: '200px',
                height: '200px',
                borderRadius: '50%', // Rounded corners
                backgroundImage: 'url(/IMG_H2.svg)', // SVG as background image
                backgroundSize: 'cover', // Makes sure the image fills the div
                backgroundPosition: 'center',
                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.5)' // Equivalent to shadow-2xl
              }}
            >
              {/* No <Image> component */}
            </div>
          </div>

            

        
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hello, I&#39;m Andres!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m an{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-blue-600">
              Aspiring Engineer{" "}
            </span>
            based in Miami, FL. Working towards cultivating and learning new skills. 
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="about"
              className="text-neutral-100 font-semibold px-6 py-3 bg-gray-700 rounded shadow hover:opacity-80 transition-opacity cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About Me
            </Link>
            <Link
              to="experience"
              className="text-neutral-100 font-semibold px-6 py-3 bg-gray-700  rounded shadow hover:opacity-80 transition-opacity cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Experience
            </Link>
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-gray-700  rounded shadow hover:opacity-80 transition-opacity cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <Link
              to="awards"
              className="text-neutral-100 font-semibold px-6 py-3 bg-gray-700 rounded shadow hover:opacity-80 transition-opacity cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Awards
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
