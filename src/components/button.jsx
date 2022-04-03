import React from 'react';

export default function Button(props) {

    // const handleSurrondings = (event) =>{
    //     console.log(event.target.innerHTML)

    // }

  return (
  <div>
    <button className={`btn ColorChangeBtn btn-${props.ColorName} mx-2`} onClick ={props.toggle} value={props.ColorName} >
        {props.ColorName}
    </button>
  </div>);
}
