'use client' 
import React, { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineCheck,
} from "react-icons/ai";
import GlassButton from "@/components/glass/GlassButton";

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("ajimenez1@ufl.edu").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <footer className="mx-auto max-w-4xl px-4 sm:px-6 text-white/80">
      <hr className="w-full h-px mx-auto mt-12 bg-white/10 border-0" />
      <div className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between gap-4">
        <div className="flex flex-row items-center justify-center space-x-1 text-white/70">
          © 2024 Andres Jimenez<a href="/" className="hover:underline"></a>
        </div>

        <div className="flex flex-row items-center justify-center space-x-3 mb-1">
          {/* Small résumé button */}
          <a
  href="https://docs.google.com/document/d/1tHVq8cFrq3pe1RYa1d7lS9_mZMEEj-CNAqsVM36JQUw/edit?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <GlassButton
    variant="primary"
    size="small"
    className="w-24 scale-70 origin-center"
  >
    My resume
  </GlassButton>
</a>

          {/* Mail icon (click to copy) */}
          <button
            type="button"
            onClick={copyEmailToClipboard}
            aria-label="Copy email address"
            className="flex items-center"
          >
            <AiOutlineMail
              className={`hover:-translate-y-1 transition-transform cursor-pointer text-white/80 ${
                isCopied ? "text-green-400" : ""
              }`}
              size={24}
            />
          </button>

          {isCopied && (
            <div className="flex items-center ml-1">
              <AiOutlineCheck className="text-green-500" size={18} />
              <span className="text-green-500 text-xs ml-1">Copied!</span>
            </div>
          )}

          <a href="https://github.com/andjimenezuf" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-white/80"
              size={24}
            />
          </a>

          <a href="https://www.linkedin.com/in/andresjj/" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-white/80"
              size={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
