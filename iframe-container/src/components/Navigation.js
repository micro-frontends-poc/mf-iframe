import React, { useState, useEffect } from "react"
import { Switch, Route, Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./Navigation.css"

const Navigation = props => {
  let history = useHistory()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openLoginPanel = () => {
    // pass down products to cart
    history.push("/cart")
    console.log(props.products)
  }

  // useEffect(() => {
  //   setProducts([...products, props.prod])
  // }, [props.prod])

  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">
            Microshop
          </span>
        </Link>
      </div>
      <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
        <div>
          {/* <Link to="/cart"> */}
          <button
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-800 hover:bg-white mt-4 md:mt-0"
            onClick={() => openLoginPanel()}
          >
            Checkout ({props.products.length})
          </button>
          {/* </Link> */}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
