import React, { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation"

function App() {
  const [products, setProducts] = useState([])
  const [cartToggle, setCartToggle] = useState(false)
  useEffect(() => {
    const CART = process.env.REACT_APP_CART
    const PRODUCTS = process.env.REACT_APP_PRODUCTS
    const pi = document.getElementById("products-iframe")
    const ci = document.getElementById("cart-iframe")

    const handleCartChange = (event) => {
      if (event.origin.startsWith(PRODUCTS)) {
        setProducts((products) => [...products, event.data.name])
        ci.contentWindow.postMessage(event.data, CART)
      } else if (event.origin.startsWith(CART)) {
        if (event.data.type == "paid") {
          setProducts([])
        } else if (event.data.type == "removed") {
          const id = event.data.id
          const itemIndex = products.findIndex((it) => id === it.id)
          const items = products
          items.splice(itemIndex, 1)
          setProducts(items)
          pi.contentWindow.postMessage(event.data, PRODUCTS)
        }
      }
    }

    window.addEventListener("message", handleCartChange)
    return () => {
      window.removeEventListener("message", handleCartChange)
    }
  }, [products])

  const handleCartToggle = (cartState) => {
    setCartToggle(cartState)
  }

  return (
    <Router>
      <div className="App">
        <Navigation
          products={products}
          cartToggle={cartToggle}
          onCartToggleChange={handleCartToggle}
        />
        <section className="h-full flex relative pt-24">
          <iframe
            src={`${process.env.REACT_APP_PRODUCTS}/product/`}
            frameBorder="0"
            scrolling="no"
            title="Products made with Vue"
            width="100%"
            id="products-iframe"
          ></iframe>

          <iframe
            src={process.env.REACT_APP_CART}
            frameBorder="0"
            scrolling="no"
            title="Cart made with Angular"
            id="cart-iframe"
            className={cartToggle ? "fixed w-full" : "hidden"}
          ></iframe>
        </section>
      </div>
    </Router>
  )
}

export default App
