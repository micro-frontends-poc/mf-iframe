import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation"

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const sendReceived = (event) => {
      if (event.origin.startsWith("http://localhost:3001")) {
        setProducts((products) => [...products, event.data.name])
        document
          .querySelectorAll("iframe")
          .forEach((iframe) =>
            iframe.contentWindow.postMessage(event.data, "*")
          )
      }
    }

    window.addEventListener("message", sendReceived)
    return () => window.removeEventListener("message", sendReceived)
  }, [])

  return (
    <Router>
      <div className="App">
        <Navigation products={products} />
        <Route exact path="/">
          <iframe
            src="http://localhost:3001/product/"
            frameBorder="0"
            title="Products made with Vue"
            width="100%"
            height="100%"
            id="cart"
          ></iframe>
          <iframe
            src="http://localhost:3002"
            frameBorder="0"
            title="Cart made with Angular"
            width="100%"
            height="100%"
            id="products"
          ></iframe>
        </Route>
        <Route path="/cart"></Route>
      </div>
    </Router>
  )
}

export default App
