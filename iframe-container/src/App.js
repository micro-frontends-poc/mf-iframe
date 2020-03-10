import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Navigation from "./components/Navigation"

function App() {
  return (
    <div className="App">
      <Navigation />
      <iframe
        src="http://localhost:3001/product/"
        frameBorder="0"
        title="iframe Example 1"
        width="400"
        height="300"
      ></iframe>
    </div>
  )
}

export default App
