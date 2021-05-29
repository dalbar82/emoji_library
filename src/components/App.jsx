import React from "react";
import Card from "./Card"
import emojipedia from "../emojipedia"

function createCard(emoji) {
  return (
    <Card
      key={emoji.id}
      id={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="dictionary">
        {emojipedia.map(createCard)}
      </div>
      
    </div>
  );
}

export default App;
