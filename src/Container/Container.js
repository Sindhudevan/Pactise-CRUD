import React, { Component } from 'react';
import '../Styles/container.css';
import ProfilePhoto from './ProfilePhoto';
import Inputfield from './Inputfield';
import '../Styles/button.css';
import Button from './Button';
import Tablebody from '../CrudContainer/TableBody';
import Topbar from './Topbar';
import { inputFields } from "../seed/seed";
import { BrowserRouter as Router, Route } from "react-router-dom";


class Container extends Component {
    state = {
        userTempData: {
            firstName: '',
            lastName: '',
            dob: '',
            gender: 'Male',
            email: '',
            phone: '',
            communicationAddress: '',
            permanentAddress: '',
        },
        userData: [],
        editable: "",
        page: 0,

        isSubmit: false,
    }
    gettingData = (name, value) => {
        let userTempData = { ...this.state.userTempData };
        userTempData[name] = value;
        this.setState({ userTempData })

    }

    loaduserData = () => {

        let editable = this.state.editable;
        this.setState({ isSubmit: true, })
        let check = true;
        let userTempData = { ...this.state.userTempData };
        Object.keys(userTempData).map((item, index) => {
            if (!userTempData[item]) {
                check = false;
            }
        })
        if (check) {
            if (editable === "") {
                let userData = this.state.userData;
                userData.push({ ...this.state.userTempData });
                localStorage.setItem('userTempData', JSON.stringify(userData));
            }
            else {
                let userData = [...this.state.userData];
                userData[editable] = this.state.userTempData;
                this.setState({ userData, editable: "", page: 0 });
                localStorage.setItem('userTempData', JSON.stringify(userData));
            }
        }
    }


    clear = () => {
        let userTempData = {
            firstName: '',
            lastName: '',
            dob: '',
            gender: 'Male',
            email: '',
            phone: '',
            communicationAddress: '',
            permanentAddress: '',
        }
        this.setState({ userTempData });
    }

    getgender = (gender) => {

        let userTempData = this.state.userTempData;
        userTempData.gender = gender;
        console.log(gender)
        this.setState({ userTempData });

    }


    onDelete = (index) => {
        let userData = localStorage.getItem("userTempData");
        userData = JSON.parse(userData);
        userData.splice(index, 1);
        this.setState({ userData })
        localStorage.setItem('userTempData', JSON.stringify(userData));
    }

    onEdit = (index) => {
        let userData = localStorage.getItem("userTempData");
        userData = JSON.parse(userData);
        const userTempData = userData[index];
        this.setState({ editable: index, userTempData, page: 0 });
    }

    pageTurn = (item) => {
        if (item === 'Form') {
            this.setState({ page: 0, isSubmit: false });
            this.clear();

        } else {
            this.setState({ page: 1 });
        }
    }
    componentDidMount() {
        let userData = localStorage.getItem("userTempData");
        console.log(userData);
        userData = userData != null ? JSON.parse(userData) : [];
        this.setState({ userData });

    }

    render() {
        const { userTempData } = this.state;
        const userData = localStorage.getItem("userTempData");
        let form = inputFields.map((item, id) => {
            return (
                <Inputfield key={id} id={id} isSubmit={this.state.isSubmit} value={userTempData[item.value]} type={item.type}
                    onChange={(event) => this.gettingData(item.value, event.target.value)}
                    placeholder={item.placeholder} labelvalue={item.labelvalue}
                    label={item.label}
                    handleChange={(event, gender) =>
                        this.getgender(gender, event.target.checked)}
                    Checked={this.state.userTempData.gender}
                />

            )
        }
        )
        // let list = <Tablebody onDelete={this.onDelete} tableData={userData != null ? JSON.parse(userData) : []}
        //     onEdit={this.onEdit}
        // />

        return (
            <Router>
                <div>
                    <Topbar containerStyle={'top-Bar'} turn={this.pageTurn} />
                    <Route path="/" exact component={() => < FormContainer form={form} loaduserData={this.loaduserData} editable={this.state.editable} />} />
                    <Route path="/list" component={() => <Tablebody onDelete={this.onDelete} tableData={userData != null ? JSON.parse(userData) : []}
                        onEdit={this.onEdit} />} />

                </div>
            </Router>
        );
    }
}

export default Container;


const FormContainer = (props) => {
    return (
        <div id="comContainer">
            {props.form}
            <div>
                <div className='submitBtn-Area'>
                    <Button onClick={() => props.loaduserData()} buttonClassName={"createBtn"} value={props.editable !== "" ? "Update" : "Submit"} />
                </div>
            </div>
        </div>
    )
}





















