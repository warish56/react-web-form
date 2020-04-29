import React from 'react';
import './style.css';

const Error = ({text}) => {
    return (
    <span className="error">{text}</span>
    )
}

export default Error;