import React,{useState} from 'react'


export default function TextForm(props) {
  const [text,setText]=useState('');

  const handleOnChange=(event)=>{
    console.log("uppercase was onchange , ")
    setText(event.target.value)
  }

  const handleUpClick=()=>{
    console.log("uppercase was clicked: "+text)
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  }

  const handleLoClick=()=>{
    console.log("Lowercase was clicked: "+text)
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")
  }

  const speak=()=>{
    let msgSpeak=new SpeechSynthesisUtterance();
    msgSpeak.text=text;
    window.speechSynthesis.speak(msgSpeak);
    props.showAlert("Read word Automatically","success")
 }

  const copy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copy Successfully","success")
  }

  const clear=()=>{
    let blank=""
    setText(blank)
    props.showAlert("Clear all text Successfully","success")
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Removed extra space Successfully","success")
  }
 
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1  >{props.heading}</h1>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange} ></textarea>
</div>

<button className='btn btn-primary mx-2' onClick={handleUpClick} >Conver to upperCase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick} >Conver to LowerCase</button>
<button className='btn btn-primary mx-2' onClick={speak} >Speak</button>
<button className='btn btn-primary mx-2' onClick={copy} >Copy</button>
<button className='btn btn-primary mx-2' onClick={clear} >Clear</button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpaces} >Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your test summary</h2>
      <p>{text.split(" ").length - 1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text:"Enter something in the textbox above to preview it here"} </p>
    </div>
    </>
  )
}
