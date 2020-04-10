import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation"

function App() {
  const [products, setProducts] = useState([])
  const [cartToggle, setCartToggle] = useState(false)
  useEffect(() => {
    const sendProductToCart = (event) => {
      if (event.origin.startsWith("http://localhost:3001")) {
        setProducts((products) => [...products, event.data.name])
        const pi = document.getElementById("products-iframe")
        pi.contentWindow.postMessage(event.data, "http://localhost:3002")
      }
    }
    const sendItemToProducts = (event) => {
      if (event.origin.startsWith("http://localhost:3002")) {
        setProducts(products.filter((p) => p.id != event.data))
        const ci = document.getElementById("cart-iframe")
        ci.contentWindow.postMessage(event.data, "http://localhost:3001")
      }
    }

    window.addEventListener("message", sendProductToCart)
    window.addEventListener("message", sendItemToProducts)
    return () => {
      window.removeEventListener("message", sendProductToCart)
      window.removeEventListener("message", sendItemToProducts)
    }
  }, [])

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
            src="http://localhost:3001/product/"
            frameBorder="0"
            scrolling="no"
            title="Products made with Vue"
            width="100%"
            id="cart-iframe"
          ></iframe>

          <iframe
            src="http://localhost:3002"
            frameBorder="0"
            scrolling="no"
            title="Cart made with Angular"
            id="products-iframe"
            className={cartToggle ? "fixed w-full" : "hidden"}
          ></iframe>
        </section>
      </div>
    </Router>
  )
}

export default App
