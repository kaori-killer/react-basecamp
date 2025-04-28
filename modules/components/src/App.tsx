import React from "react";
import { Button } from "@kaori-killer/practice-npm-modules";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <h1>Button Component Example</h1>
      <Button label="Click me" onClick={handleClick} />
    </div>
  );
}

export default App;
