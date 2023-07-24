import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  // State to manage the visibility of the paragraph
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  // Function to toggle the visibility of the paragraph
  const handleClick = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <div id="main">
      {/* Use the `isParagraphVisible` state to conditionally set the className */}
      <p id="para" className={isParagraphVisible ? "" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
      {/* Attach the `handleClick` function to the button's onClick event */}
      <button id="click" onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
