import React, { useState, useEffect, useCallback } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation"

function App() {
  const [products, setProducts] = useState([])
  const [cartToggle, setCartToggle] = useState(false)
  const [user, setUser] = useState("")

  const handleChange = useCallback ((event) => {
    const CART = process.env.REACT_APP_CART
    const PRODUCTS = process.env.REACT_APP_PRODUCTS
    const pi = document.getElementById("products-iframe")
    const ci = document.getElementById("cart-iframe")

    switch (event.data.type) {
      case 'added':
        console.log('Product arrived from Vue project to React container:', event.data.product)
        setProducts((products) => [...products, event.data.product.name])
        ci.contentWindow.postMessage(event.data.product, CART)
        break
      case 'paid' :
        setProducts([])
        break
      case "removed": 
        const id = event.data.id
        const itemIndex = products.findIndex((it) => id === it.id)
        const items = products
        items.splice(itemIndex, 1)
        setProducts(items)
        pi.contentWindow.postMessage(event.data, PRODUCTS)
        break
      case "theme": 
        event.data.value === "dark"
          ? document.documentElement.classList.add("theme-dark")
          : document.documentElement.classList.remove("theme-dark")
        pi.contentWindow.postMessage(event.data, PRODUCTS)
        ci.contentWindow.postMessage(event.data, CART)
        break
      case "user": 
        setUser(event.data.value)
        break
    }
  }, [])

  useEffect(() => {
    
    window.addEventListener("message", handleChange)
    return () => {
      window.removeEventListener("message", handleChange)
    }
  }, [handleChange])

  const handleCartToggle = (cartState) => {
    setCartToggle(cartState)
  }

  return (
    <Router>
      <div className="App bg-inverse">
        <Navigation
          user={user}
          products={products}
          cartToggle={cartToggle}
          onCartToggleChange={handleCartToggle}
        />
        <section className="h-full flex relative pt-24">
          <iframe
            src={`${process.env.REACT_APP_PRODUCTS}`}
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
