import React from 'react';
import './Button.css';

const NumberButton = props => {
    return(
        <p style={props.style}>{props.symbol}</p>
    );
}

export default NumberButton;