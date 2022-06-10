import React, { useState } from 'react'


export default function Text(props) {
    const [text, setText] = useState("Enter Text Here");


    const upperCase = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to Upper Case', 'success')
    }

    const lowerCase = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to Lower Case', 'success')
    }


    const italic = () => {

        if (document.getElementById('textarea').style.fontStyle === 'italic') {
            document.getElementById('textarea').style.fontStyle = 'normal';
            props.showAlert('Converted to Italic', 'success');
        }
        else {
            document.getElementById('textarea').style.fontStyle = 'italic'
        }
    }
    
    const clipboard=()=>{
        let copyText = document.getElementById('textarea');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Copied to Clipboard', 'success')
    }
    const handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }

    const color = {
        color: props.mode === 'light' ? 'black' : 'white'
    }

    let chars = 0;
    for (let char of text) {
        if (char !== " ") {
            chars++
        }
    }

    let words = 0;
    for (let w of text.split(" ")){
        if (w !== ""){
            words++;
        }
    }



   
    
    return (
        <>

            <div className="mb-3">
                <h1 ><label htmlFor="textarea" className="form-label" style={color}>Example textarea </label></h1>
                <textarea id="textarea" className="form-control" rows="8" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(197 214 217)', color: props.mode === 'light' ? 'black' : '#0f1148' }}></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={upperCase} ><a href="#alert">Upper Case </a></button>
            <button className='btn btn-primary mx-1 my-1' onClick={lowerCase} ><a href="#alert">Lower Case</a></button>
            <button className='btn btn-primary mx-1 my-1' onClick={clipboard} ><a href="#alert">Copy</a></button>
            <button className='btn btn-primary mx-1 my-1' onClick={()=>{setText(""); props.showAlert('Text Cleared', 'success')}} ><a href="#alert">Clear</a></button>
            <button className='btn btn-primary mx-1 my-1' id="btnitalic" onClick={italic}><a href="#alert"> Italic</a></button>
            <p style={color}>{words} words, {chars} Characters</p>
            <h2 style={color}>Preview</h2>
            <p style={color}>{text}</p>


        </>

    )
}
