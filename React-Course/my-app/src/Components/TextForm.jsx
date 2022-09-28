import React, {useState} from 'react'

export default function TextForm(props) {
    const { heading } = props;
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        setText("");
    }
    const handleCopy= () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnchange=(event)=>{
        setText(event.target.value)
    }

    return ( 
        <>
        <div className='container'>
            <h1>{heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary  m-1" onClick={handleUpClick}>Conver to Uppercase</button>
            <button className="btn btn-primary  m-1" onClick={handleLowClick}>Conver to Lowercase</button>
            <button className="btn btn-primary  m-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary  m-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary  m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes reading</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>

    )
}