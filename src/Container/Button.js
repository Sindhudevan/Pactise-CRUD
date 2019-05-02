import React from 'react';
import { BrowserRouter as Router , Link } from "react-router-dom";

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={props.className} >
                <Link to={props.to}>{props.value}</Link>
            </button>
        </div>
    );
};

export default Button;