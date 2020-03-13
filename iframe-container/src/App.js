import React, { useState, useEffect } from "react"
import "./App.css"
import Navigation from "./components/Navigation"

function App() {
  // const products = document.querySelector("#products")
  const [wantedProd, setWantedProd] = useState(null)
  useEffect(() => {
    const sendReceived = event => {
      if (event.origin.startsWith("http://localhost:3001")) {
        setWantedProd(event.data.name)
        console.log(event.data)
        // document
        //   .querySelectorAll("iframe")
        //   .forEach(iframe => iframe.contentWindow.postMessage(event.data, "*"))
      }
    }

    window.addEventListener("message", sendReceived)
    return () => window.removeEventListener("message", sendReceived)
  }, [])

  return (
    <div className="App">
      <Navigation prod={wantedProd} />
      <iframe
        src="http://localhost:3001/product/"
        frameBorder="0"
        title="iframe Example 1"
        width="100%"
        height="100%"
        id="products"
      ></iframe>
    </div>
  )
}

export default App
