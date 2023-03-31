import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showalert("converted to uppercase","success");
    }
    const handleLoClick=()=>{
      // console.log("Uppercase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showalert("converted to lowercase","success");
  }
  const handleClearClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText="";
    setText(newText)
    props.showalert("text cleared","success");
}
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showalert("extra spaces cleared","success");
    }
    const handleCopy=()=>{
      var text=document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showalert("text copied","success");
    }
    const [text, setText]=useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
     <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white",color: props.mode==="dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==="dark"?"white":"black"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"enter something to preview"}</p>
    </div>
    </>
  )
}
