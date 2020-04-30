import React,{memo} from 'react';
import './style.css';

const Error = memo(({text}) => {
    return (
    <span className="error">{text}</span>
    )
})
Error.displayName = 'Error'

export default Error;