import React, { useState } from "react"
import "./Navigation.css"

const Navigation = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav>
      <div className="logo-container">
        <span className="">Microshop</span>
      </div>
      <div className="toggle">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="menu">
        {isMenuOpen && (
          <div className="menu-items">
            <a href="#responsive-header" className="">
              Docs
            </a>
            <a href="#responsive-header" className="">
              Examples
            </a>
          </div>
        )}
        <div>
          <a
            href="#"
            className="login-link inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
