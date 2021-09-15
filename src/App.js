import React, { useState } from "react";
import "./styles.css";
var animalEmoji = {
  "🐵": "monkey",
  "🐶": "dog",
  "🐱": "cat",
  "🦝": "raccoon",
  "🐴": "horse",
  "🐄": "cow"
};
var emojiWeKnow = Object.keys(animalEmoji);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = animalEmoji[userInput];
    if (meaning in animalEmoji) {
      setMeaning(meaning);
    }
    setMeaning("we don't have this in our Database");
  }
  function emojiclickhandler(item) {
    var meaning = animalEmoji[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <section>
        <div className="header-div">
          <h1>Animoji Pedia</h1>
        </div>
      </section>
      <section>
        <div className="input-div">
          <input onChange={emojiInputHandler} />
        </div>
      </section>

      <div
        style={{
          padding: "1rem",
          backgroundColor: "#fbcfe8"
        }}
      >
        <h1 style={{ fontSize: "1.5rem", color: "black", margin: "0px" }}>
          {meaning}
        </h1>
      </div>
      <div className="weKnow-header">
        <h2
          style={{
            margin: "0px"
          }}
        >
          You can try out there animoji
        </h2>
      </div>
      <section>
        <div className="emoji-div">
          {emojiWeKnow.map((item) => {
            return (
              <span
                key={item}
                onClick={() => emojiclickhandler(item)}
                style={{
                  padding: "1rem",
                  cursor: "pointer",
                  fontSize: "2rem"
                }}
              >
                {item}
              </span>
            );
          })}
          <div
            style={{
              padding: "4rem 2rem "
            }}
          >
            © | 2021 | krishanuDutta
          </div>
        </div>
      </section>
    </div>
  );
}
