import React, { Component } from 'react';

export const inputFields = [
    {
        value: "firstName",
        type: "text",
        placeholder: "Enter Firstname",
        labelvalue: "FirstName",
        errorMsg: "* Field cannot be Empty"
    },
    {
        value: "lastName",
        type: "text",
        placeholder: "Enter Lastname",
        labelvalue: "LastName",
        errorMsg: "* Field cannot be Empty"
    },
    {
        value: "dob",
        type: "date",
        labelvalue: "Date of Birth",
        errorMsg: "* Field cannot be Empty"
    },
    {
        gender: "gender",
        type: "radio",
        label: ["Male", "Female"],
        labelvalue: "Gender",
        errorMsg: "* Field cannot be Empty",
    },

    {
        value: "email",
        type: "email",
        labelvalue: "Email",
        errorMsg: "* Field cannot be Empty"
    },
    {
        value: "phone",
        type: "number",
        labelvalue: "Phone ",
        errorMsg: "* Field cannot be Empty"
    },
    {
        value: "communicationAddress",
        type: "textarea",
        labelvalue: "Communication",
        errorMsg: "* Field cannot be Empty"

    },
    {
        value: "permanentAddress",
        type: "textarea",
        labelvalue: "Permanent",
        errorMsg: "* Field cannot be Empty"

    }
]


export const topbarBtn = [{ name: 'Form', to: "/" }, { name: "List", to: "/list" }];




// {
//         label:"gender",
//         name:"gender",
//         value:1,
//         options:[{id:1,label:"male"}, {id:2, label:"female"}],
//         helperText:"should select",
//         type:"radio",
//         isMandatory:false
//     },