import React from 'react';
import Button from './Button'

const Header = ({ title, show, onAdd }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            <Button value={show} onAdd={onAdd} />
        </div>
    );
}

export default Header;
