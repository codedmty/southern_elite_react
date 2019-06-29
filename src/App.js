import React from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo goes here" />
      <div>
        <p>
          <a
            className="contact"
            href="mailto:erikhudson1@gmail.com"
            target="blank"
          >
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
