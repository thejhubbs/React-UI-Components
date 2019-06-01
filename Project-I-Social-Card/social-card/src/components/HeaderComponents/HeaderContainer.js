import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import HeaderImage from './ImageThumbnail'

function Header() {
    return (
        <header className="card-header">
            <HeaderImage />
            <div>
                <HeaderTitle />
                <HeaderContent />
            </div>
        </header>
    );
}

export default Header;