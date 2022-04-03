import React from 'react';

export default function Alert(props) {
  return( props.data && 
            <div className={`alert alert-${props.data.type} alert-dismissible fade show" role="alert" `}>
            <strong>{props.data.type.charAt(0) + props.data.type.slice(1)}</strong> {props.data.display}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>);
}
