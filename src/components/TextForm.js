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
    document.getSelection().removeAllRanges();
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
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Covnert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Covnert to Lowercase </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUndoClick}> Undo </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#113f83' }}>
        <h2> Your text summery</h2>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>

    </>
  );
}
