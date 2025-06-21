import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = () =>{
        //console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase!", "success");
    }
    const handleClearClick = () =>{
        //console.log("Clear Click was clicked" + text);
        let newText = "";
        setText(newText)
        props.showAlert("Cleared text!", "success");

    }
    const handleCapitalizedClick = () => {
        let newText = text
        .toLowerCase()
        .split(" ")
        .map(word => word ? word.charAt(0).toUpperCase() + word.slice(1) : "")
        .join(" ");
        setText(newText);
                props.showAlert("Capitalized text!", "success");

    }
    const handleCopy= () =>{
        //console.log("Text was copied" + text);
         navigator.clipboard.writeText(text)
                 props.showAlert("Copied to clipbored!", "success");

    }
    const handleExtraSpaces= () =>{
        //console.log("Extra Spaces was covered" + text);
        let newText =  text.split(/\s+/).join(" ").trim();
        setText(newText);
                props.showAlert("Removed extra spaces!", "success");

    }
    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
   // text='New text'; //Wrong way to change the state
   // setText('New text'); //Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode === "dark" ? "white" : "#02213d"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color:props.mode === "dark" ? "white" : "black" }} id="MyBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCapitalizedClick}>Capitalized Case</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3"style={{color: props.mode === "dark" ? "white" : "#02213d"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
