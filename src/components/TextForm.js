import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (newText) props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text Reversed!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if (newText != "") props.showAlert("Extra spaces removed!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopy = () => {
	navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to clipboard!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  let myStyle = {
    backgroundColor: props.color,
    color: props.color === "white" ? "black" : "white",
  };

  return (
    <>
      <div style={myStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={myStyle}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="9"
            placeholder="type something..."
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleReverseClick}
        >
          Reverse Text
        </button>
        <button
		  disabled={text.length===0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container" style={myStyle}>
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((message) => {
              return message.length !== 0;
            }).length
          }{" "}
          <b>words</b> and {text.length} <b>characters</b>
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((message) => {
              return message.length !== 0;
            }).length}{" "}
          <b>Minutes</b> read
        </p>
        <h2>Preview</h2>
        <p>
          {text === ""? "Nothing to preview": text}
        </p>
      </div>
    </>
  );
}
