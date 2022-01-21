import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was Click: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success")
  };

  const handleLoClick = () => {
    // console.log("Lowercase was Click: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success")
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Clear!", "success")

  };
  const handleCopy = () => {
    const text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to Clipboard!", "success")

  }
  const handleUndoClick = () => {
    setText(text.slice(0, text.length - 1))
  };

  const HandleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#113f83' }}>
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={HandleOnChange} value={text} style={{ backgroundColor: props.mode === 'dark' ? '#939497' : 'white', color: props.mode === 'dark' ? 'white' : '#113f83' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covnert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covnert to Lowercase </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy </button>
        <button className="btn btn-primary mx-1" onClick={handleUndoClick}> Undo </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#113f83' }}>
        <h2> Your text summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>

    </>
  );
}
