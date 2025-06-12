import React from "react"
import Image from "next/image"

const programmingLanguages = [
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "C++" },
  { skill: "Java" },
  { skill: "HTML/CSS" },
  { skill: "Swift" },
  { skill: "R" },
]

const frameworksAndTools = [
  { tool: "React.js" },
  { tool: "Next.js" },
  { tool: "Tailwind CSS" },
  { tool: "Pytorch" },
  { tool: "OpenCV" },
  { tool: "TensorFlow" },
  { tool: "TensorRT" },
  { tool: "Retreival Augmented Generation (RAG)" },
  { tool: "Large Language Models (LLMs)" },
  { tool: "Ollama" },
  { tool: "Docker" },
];

const certifications = [
  { name: "AWS Cloud Practitioner", svg: (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
  <path fill="#252f3e" d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,
  0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 
  c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,
  0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,
  0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,
  1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,
  0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,
  0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,
  0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,
  0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,
  0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,
  0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,
  0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,
  0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,
  1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,
  0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,
  0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 
  c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"></path>
  <path fill="#f90" d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,
  3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 
  c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"></path>
  </svg>) },
  { name: "NVIDIA Deep Learning Fundamentals", svg:(<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
  <rect width="29" height="32" x="18" y="8" fill="#76b900"></rect><path fill="#fafafa" d="M18,17.68c0.52-0.05,1.05-0.09,1.57-0.07c4.95,0,7.9,3.85,7.9,3.85l-4.03,3.39 c-1.8-3.02-2.43-4.35-5.44-4.71V17.68z 
  M18,28.72c0.73,0.24,1.52,0.36,2.3,0.36c5.88,0,11.35-7.6,11.35-7.6s-5.07-6.91-12.81-6.66 c-0.28,0-0.56,0.02-0.84,0.03v-2.3l0.84-0.05c10.76-0.37,17.78,8.82,17.78,8.82s-8.05,9.8-16.44,9.8c-0.73,0-1.47-0.07-2.18-0.19
   V28.72z M19.95,36.09c-0.66,0-1.32-0.03-1.95-0.1v-2.44c0.59,0.07,1.22,0.12,1.81,0.12c7.82,0,13.47-3.99,18.94-8.7 c0.91,0.73,4.62,2.49,5.39,3.26C38.94,32.59,26.82,36.09,19.95,36.09z"></path><path fill="#76b900" 
   d="M18,28.717v2.232c-7.219-1.29-9.225-8.806-9.225-8.806s3.47-3.836,9.225-4.464v2.441h-0.017 c-3.017-0.366-5.388,2.459-5.388,2.459S13.937,27.339,18,28.717"></path><path fill="#76b900" 
   d="M5.183,21.829c0,0,4.272-6.313,12.834-6.975v-2.302c-9.486,0.767-17.682,8.789-17.682,8.789 S4.974,34.768,18,35.989v-2.441C8.444,32.361,5.183,21.829,5.183,21.829z"></path>
  </svg>) }
];


const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl ">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello, my name is Andres and I am a{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">{"First-Generation Student"}</span>,
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">{" highly ambitious"}</span>,
              <span className="font-bold  text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">{" self-motivated"}</span>, and
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">{" driven"}</span>.
               Seeking mentorship opportunities where I can apply and expand my technical skills and cultivate a continuous learning environment. 
            </p>
            <br />
            <p>
              I am currenlty a Junior at the{""}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-orange-500 ">{" University of Florida "}</span>
              majoring in a BS in Computer Science with a Minor in Statistics. Some areas of growing interest include software engineering, machine learning, data
              science, quantitative finance, and cloud computing.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions.
              From music, to cycling,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that one should{" "}
              <span className="font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have desire to engage with mentors so that can push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {programmingLanguages.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>

            <div className="text-center md:text-left">
              <br />
              <h1 className="text-2xl font-bold mb-6">Frameworks and Tools</h1>
              <div className="flex flex-wrap justify-center md:justify-start">
                {frameworksAndTools.map((item, idx) => (
                  <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                    {item.tool}
                  </p>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <br />
              <h1 className="text-2xl font-bold mb-6">My Certifications</h1>
              <div className="flex flex-wrap justify-center md:justify-start">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="m-2 flex bg-gray-200 text-gray-500 rounded font-semibold">
                    <div className="svg-container flex items-center justify-center p-2">
                      {cert.svg}
                    </div>
                    <div className="flex items-center p-2">
                      {cert.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
