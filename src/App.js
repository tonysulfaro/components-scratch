import React from "react";
import "./App.css";
import CardBlackBottom from "./components/CardBlackBottom/CardBlackBottom";
import CardBoxShadowOnly from "./components/CardBoxShadowOnly/CardBoxShadowOnly";

function App() {
  return (
    <div className="App">
      <h1>Components Scratch</h1>
      <CardBlackBottom
        img_src="http://placekitten.com/300/200"
        title="Card Black Bottom"
        text="more information about something"
      ></CardBlackBottom>

      <CardBoxShadowOnly
        title="Card Box Shadow Only"
        text="some more text here"
      ></CardBoxShadowOnly>
    </div>
  );
}

export default App;
