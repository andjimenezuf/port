"use client" // this is a client component
import React, { useState } from "react"
import { Link } from "react-scroll/modules"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="fixed top-0 z-50 w-full bg-[#05060b]/70 backdrop-blur-lg border-b border-white/5 text-white px-4 sm:px-8">
      <div className="flex items-center justify-between py-4">
        <Link to="home" className="text-lg font-semibold tracking-wide">
          Andres Jimenez
        </Link>
        <div className="lg:hidden">
          <button
            className="p-2 rounded-md border border-white/10"
            onClick={() => setNavbar(!navbar)}
            aria-label="Toggle menu"
          >
            {navbar ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
        <nav className="hidden lg:flex gap-6 text-sm uppercase tracking-wide">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              className="cursor-pointer text-white/80 hover:text-white transition"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {navbar && (
        <div className="lg:hidden border-t border-white/10 py-4">
          <nav className="flex flex-col gap-4 text-sm">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.page}
                className="cursor-pointer text-white/80"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
