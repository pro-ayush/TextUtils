import React from 'react';

export default function Preview(props) {

    // Logic for counting word in a paragraph
    const wordCounter= (sample) => {
        if (sample.length > 0) {
            return sample.replace(/\s+/g, ' ').trim().split(' ').filter((element) => {return element.length !== 0}).length
        }
        else{
            return 0
        }
    }

    const CharCounter = (sample) => {
        if (sample.length > 0) {
            return sample.replace(/\s+/g, ' ').trim().length
        }
        else{
            return 0
        }
    }
    

  return (
  <div>
      <div className="container">
      <h2 className={`text-${props.mode === 'light'?'dark':'light'}`}>Preview of Written Text</h2><p className={`text-${props.mode === 'light'?'dark':'light'}`}>Words: {wordCounter(props.Ptext)} , Characters : {CharCounter(props.Ptext)}</p>
      <p className={`text-${props.mode === 'light'?'dark':'light'}`}><strong>{props.Ptext.length > 0? props.Ptext:"Write something in the box"}</strong></p>
      </div>
      
  </div>);
}
