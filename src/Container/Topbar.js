import React from 'react';
import '../Styles/Topbar.css';
import Button from './Button';
import '../Styles/button.css';
import {topbarBtn} from '../seed/seed';

const Topbar = (props) => {
    let topbar = topbarBtn.map((item,index) => {
        return(
            <Button key={index} className="showMe" onClick={(e)=>props.turn(item)} value={item.name} to={item.to}   />
        )
    })
    return (
        <div className={props.containerStyle}>
            {topbar}
       </div>
       
    );
};

export default Topbar;