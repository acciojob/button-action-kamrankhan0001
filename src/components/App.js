import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  function toggleVisibility() {
    const paragraph = document.getElementById("para");
    if (paragraph.className === "hide") {
      paragraph.className = "show";
    } else {
      paragraph.className = "hide";
    }
  }
  
  return (
    <div id="main">
      <p id="para" className="hide">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onclick={toggleVisibility}>Click Me</button>
    </div>
  );
}

export default App;
