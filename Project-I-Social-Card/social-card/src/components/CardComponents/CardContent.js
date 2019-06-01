import React from 'react';
import './Card.css';

var style = {
    padding: '5px'
}

function CardContent() {
    return (
        <p style={style}>Any of the styles you write in your respective .css file should be available for your the components where the .css file is being imported.</p>
    );
}

export default CardContent;
