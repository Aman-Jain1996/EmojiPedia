import React, { useState } from "react";
import "./styles.css";

const dict = {
  "🙏": "Folding Hands",
  "🤔": "Thinking Face",
  "🤟": "Love-You Gesture",
  "😞": "Disappointed Face",
  "😲": "Astonished Face",
  "😠": "Angry Face",
  "😫": "Tired Face",
  "🤗": "Hugging Face",
  "🤫": "Shushing Face",
  "😴": "Sleeping Face",
  "😵": "Dizzy Face"
};

var emojisKnown = Object.keys(dict);
var emojiMeaning = Object.values(dict);

emojiMeaning = emojiMeaning.map((item) => item.toUpperCase());

export default function App() {
  const [input, InputHandler] = useState();
  const [styleError, styleErrorHandler] = useState("red");

  function onChangeHandler(e) {
    var userInput = e.target.value;

    if (emojiMeaning.includes(userInput.toUpperCase())) {
      let index = emojiMeaning.indexOf(userInput.toUpperCase());
      styleErrorHandler();
      InputHandler(emojisKnown[index]);
    } else {
      if (userInput === "") {
        InputHandler();
      } else {
        styleErrorHandler("red");
        InputHandler("we can't recognize this input ");
      }
    }
  }

  function resetHandler() {
    styleErrorHandler();
    InputHandler();
    document.getElementsByClassName("emojiInput")[0].value = null;
  }

  function clickHandler(item) {
    styleErrorHandler();
    InputHandler(dict[item]);
  }

  return (
    <div className="App">
      <header>
        <div>
          EmojiPedia
          <span role="img" aria-label=" ">
            😀
          </span>
        </div>
      </header>
      <div id="emojiContainer">
        <input
          onChange={onChangeHandler}
          className="emojiInput"
          type="text"
          placeholder="Enter your Emoji here ......."
        />
      </div>

      <div onClick={resetHandler} className="resetButton">
        Reset
      </div>

      <div className="resultDiv" style={{ color: styleError }}>
        <h2>{input}</h2>
      </div>
      <div className="emojiList">
        <h3>Emoji's we know</h3>
        <div>
          {emojisKnown.map((item) => (
            <span onClick={() => clickHandler(item)} key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <footer>
        <div>
          Are you also confused about the Emoji's your friend send's you <br />
          Check their meanings here
        </div>
      </footer>
    </div>
  );
}
