import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  function showParagraph() {
    const para = document.getElementById('para');
    para.classList.toggle('hide');
    para.classList.toggle('show');
  }

  return (
    <div className="App" id="main">
      <p id="para" className="hide">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onclick="showParagraph()">Click Me</button>
    </div>
  );
}

export default App;
