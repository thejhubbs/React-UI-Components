import React from 'react';
import './Button.css';

const ActionButton = props => {
    return( 
        <p className="action" style={props.style}>{props.symbol}</p>
    );
}

export default ActionButton;

