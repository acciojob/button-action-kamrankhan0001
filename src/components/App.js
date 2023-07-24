import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  function showParagraph() {
    const paragraph = document.getElementById("para");
    if (paragraph.classList.contains("hide")) {
      paragraph.classList.remove("hide");
      paragraph.classList.add("show");
    } else {
      paragraph.classList.remove("show");
      paragraph.classList.add("hide");
    }
  }
  
  return (
    <div id="main">
      <p id="para" className="hide">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onclick="showParagraph()">Click Me</button>
    </div>
  );
}

export default App;
