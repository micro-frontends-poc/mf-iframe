import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./Navigation.css"

const Navigation = (props) => {
  let history = useHistory()

  const openCart = (e) => {
    e.preventDefault()
    props.onCartToggleChange(!props.cartToggle)
  }

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between flex-wrap bg-purple-800 p-6 z-50">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">
            Microshop
          </span>
        </Link>
      </div>
      <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
        <button
          className="inline-block text-sm px-4 py-2 ml-auto leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-800 hover:bg-white mt-4 md:mt-0"
          onClick={(e) => openCart(e)}
        >
          Checkout ({props.products.length})
        </button>
      </div>
    </nav>
  )
}

export default Navigation
