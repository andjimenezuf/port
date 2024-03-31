import React, { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineCheck 
} from "react-icons/ai"


const Footer = () => {

  const [isCopied, setIsCopied] = useState(false);

  // Function to copy email to clipboard and show the copied icon
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("ajimenez1@ufl.edu").then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false); // Hide the copied icon after 2 seconds
      }, 2000);
    });
  };

  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2024 Andres Jimenez<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">

                <div className="relative flex items-center justify-center" onClick={copyEmailToClipboard}>
                <AiOutlineMail
                  className={`hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 ${isCopied ? 'text-green-500' : ''}`}
                  size={30}
                />
                {isCopied && (
                  <div className="flex items-center ml-2">
                    <AiOutlineCheck
                      className="text-green-500"
                      size={24}
                    />
                    <span className="text-green-500 text-sm ml-1">Copied!</span>
                  </div>
                )}
              </div>

      

          <a href="https://github.com/andjimenezuf" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          

          <a
            href="https://www.linkedin.com/in/andres-jimenez-b2053b249/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          
        </div>
      </div>
    </footer>
  )
}

export default Footer
