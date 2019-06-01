import React from 'react';
import './Card.css';
import CardContent from './CardContent.js';
import CardBanner from './CardBanner.js';

var style = {
    marginLeft: '48px',
    borderRadius: '8px',
    border: '2px solid black'
}

function Card() {
    return (
        <div style={style}>
            <CardBanner />
            <CardContent />
        </div>
    );
}

export default Card;
