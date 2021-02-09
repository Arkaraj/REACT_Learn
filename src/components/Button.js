import React from 'react';

const Button = ({ value, onAdd }) => {
    return (
        <button className="btn" onClick={onAdd}>{value}</button>
    );
}

export default Button;
