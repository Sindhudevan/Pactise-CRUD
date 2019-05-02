import React from 'react';
import '../Styles/Inputfield.css';
import { inputFields } from "../seed/seed";


const Inputfield = (props) => {
    let emailValidation = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    return (
        <div className="input-Align radioBtn">
            <label className="labelName">{props.labelvalue}</label>
            <div>
                {props.type === "radio" ?
                    <div className="radioBtn">
                        {
                            props.label.map((label, index) => {
                                return (
                                    <div key={index}>
                                        <input style={{ height: '20px', width: '20px' }}
                                            type={props.type}
                                            onChange={(e) => props.handleChange(e, label)}
                                            checked={label === props.Checked} />
                                        <label>{label}</label>
                                    </div>
                                )
                            })

                        }
                    </div>
                    : props.type === "textarea" ?

                        <div>
                            <textarea className="addressArea" placeholder={props.placeholder} type={props.type}
                                onChange={props.onChange} value={props.value} />

                            {props.isSubmit === true && props.value === "" ?
                                <div>{inputFields[props.id].errorMsg}</div> : ""}


                        </div>
                        :
                        <div>

                            <div>
                                {console.log(props.isSubmit)}
                                <input className="inputArea" placeholder={props.placeholder} value={props.value} type={props.type} onChange={props.onChange}
                                    checked={props.checked} />
                                {props.isSubmit === true ? props.value === "" ?
                                    <div>{inputFields[props.id].errorMsg}</div> 
                                    : props.type === 'email' ?
                                        emailValidation.test(props.value) ? "" : <div>Enter proper email address</div> : props.type === 'number' ? (props.value.length > 9 && props.value.length < 13) ? '' : <div>Enter Valid mobile number</div> : '' : ""
                                }
                            </div>

                        </div>

                }

            </div>
        </div>
    );
};

export default Inputfield;


