import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        console.log("Uppercase was clicked: " + newText);
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    //setText("bfg")
  return (
    <>
    <div className='container'>
        <h1>
            {props.heading}
        </h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className=' = "btn btn-primary' onClick = {handleUpClick}>Convert to Uppercase</button>
    </div>
    <div className='container my-3'>
        <h2>Your Summary</h2>
        <p> {text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minute read</p>
    </div>
    </>
  )
}
