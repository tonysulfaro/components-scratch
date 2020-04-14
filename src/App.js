import React from "react";
import "./App.css";
import CardBlackBottom from "./components/CardBlackBottom/CardBlackBottom";

function App() {
  return (
    <div className="App">
      <h1>Components Scratch</h1>
      <CardBlackBottom
        img_src="http://placekitten.com/200/300"
        title="Card Title"
        text="more information about something"
      ></CardBlackBottom>
    </div>
  );
}

export default App;
