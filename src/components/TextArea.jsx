import React, {useState} from "react";
import Preview  from "./Preview";

export default function TextArea(props) {

  const [textValue, setTextValue] = useState("enter your text here");

  //functions for buttons 
  const handleOnChange = (event) => {
    setTextValue(event.target.value)
  }

  const handleUpperCase = ()=> {
    setTextValue(textValue.toUpperCase());
  }

  const handleLowerCase = ()=> {
    setTextValue(textValue.toLowerCase());
  }

  const handleCapitalCase = ()=> {
    setTextValue(

      function capitalizeFirstLetter() {

        const arr = textValue.split(" ");
        console.log(arr)

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
        console.log(arr)

        return arr.join(" ");
        
      }
    );
  }

  //pending
  const handleCopy = () =>{
    // console.log(textValue)
    navigator.clipboard.writeText(textValue)
    props.alertFunc('success', "Copied to Clipboard")
    // alert("Copied the text");
    
  }

  const handleClear = () =>{
    setTextValue('');
  }

  //pending
  const handleSpaces = () =>{
    setTextValue(textValue.replace(/\s+/g, ' ').trim());
  }

  //Main Component 
  return (
    <div>
      <div className="container">
      <h1 className={`text-${props.mode === 'light'?'dark':'light'} my-3`}>
        Enter Text Below To Analyze
      </h1>
        <textarea value={textValue} rows="8" onChange={handleOnChange} style={{backgroundColor : props.bgColor, color : props.txtColor}}/>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalCase}>
          Capitalize
        </button>
        <button className="btn btn-success mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-warning mx-2 my-2" onClick={handleSpaces}>
          Remove Extra Spaces
        </button>
      </div>



      {/* Preview Tab  */}

      <Preview Ptext={textValue} mode={props.mode} bgColor={props.bgColor} txtColor= {props.txtColor}/>
    </div>
  );
}

