import React from "react"
import { Link } from "react-router-dom"

const Navigation = (props) => {
  const openCart = (e) => {
    e.preventDefault()
    props.onCartToggleChange(!props.cartToggle)
  }

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between flex-wrap bg-primary p-6 z-50">
      <div className="flex items-center flex-shrink-0 text-white mr-auto">
        <img
          src="/logo192.png"
          alt="React logo"
          className="object-contain opacity-50 h-16 absolute ml-4"
        />
        <Link to="/" className="z-10">
          <span className="font-semibold text-xl tracking-tight text-primary">
            Microshop
          </span>
        </Link>
      </div>
      {props.user && (
        <span className="text-primary mr-4">Hi, {props.user}</span>
      )}
      <button
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-primary border-white hover:border-transparent hover:text-default hover:bg-default"
        onClick={(e) => openCart(e)}
      >
        Checkout ({props.products.length})
      </button>
    </nav>
  )
}

export default Navigation
