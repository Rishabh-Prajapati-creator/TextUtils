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
      <h1 className='my-2 mb-4' >{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange} ></textarea>
</div>

<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick} >Conver to upperCase</button>
<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick} >Conver to LowerCase</button>
<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={speak} >Speak</button>
<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={copy} >Copy</button>
<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={clear} >Clear</button>
<button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces} >Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your test summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text:"Nothing to preview"} </p>
    </div>
    </>
  )
}
