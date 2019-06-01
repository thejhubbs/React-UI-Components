import React from 'react';
import './Header.css';

var style = {
    color: 'grey',
    fontSize: '12px'
}

function HeaderTitle() {
    return (
        <h3>
        <strong>Lamda School</strong> <span style = {style} >@Lambda School 26.Jan</span> 
        </h3>
    );
}

export default HeaderTitle;