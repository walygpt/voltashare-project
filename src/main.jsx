import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./globals.css"

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Service Worker registered successfully")
      })
      .catch(() => {
        console.log("Service Worker registration failed")
      })
  })
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
