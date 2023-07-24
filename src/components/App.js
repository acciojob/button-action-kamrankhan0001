import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  return (
    <div className="App" id="main">
      <p id="para" className="hide">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" className="show">Click Me!</button>
    </div>
  );
}

export default App;
