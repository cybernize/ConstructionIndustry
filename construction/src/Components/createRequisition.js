import React, {Component} from 'react';
import authzEmployee from '../Images/authzEmployee.jpg';
import '../css/authzEmployee.css';
import {Link,NavLink} from "react-router-dom";
import auzEmployee from '../Images/employees.jpeg';

import Inventory from "./Inventory";
import axios from 'axios';

const sectionStyle = {
    width: "1080px",
    height: "500px",
    opacity: 0.80,
    paddingRight:"303px",
    paddingLeft:"200px",
    marginLeft: "54px",
    backgroundImage: `url(${authzEmployee})`
};
const authzEmployee1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

const form ={
    width: "603px", /* Full width */
    height: "600",/* Full height */
    position:"center",
    border: "5px solid brown",
};



export default class createRequisition extends Component{
    constructor(props) {
        super(props);

        this.state = {
            clickedInventory: false,
        };


        this.handleClickInventory = this.handleClickInventory.bind(this);

    }

    handleClickInventory() {
        this.setState({
            clickedInventory: !this.state.clickedInventory,
        });
    }


    render(){
        return(
            <div>                
                <div className="sidenav" id="auzEmp">
                    <section style={ authzEmployee1 }>
                        <img src={auzEmployee} width="100%" height="160px"/>
                        <h6 className="text-center">Employee</h6>
                    </section>
                    <ul className="side-nav-menu">
                        <li><NavLink to={'/SiteManagerHome'}>HOME</NavLink></li>
                        <li><NavLink to={'/ViewRequisitions'}>SHOW REQUISIONS</NavLink></li>
                        <li><NavLink to={'/createRequisition'}>CREATE RQUISITIONS</NavLink></li>
                        <li><NavLink to={'/DeclineRequisitions'}>DISAPPROVED REQUISIONS</NavLink></li>
                    </ul>
                    <div className="p-3">
                        <Link to={'/Home'} className="btn btn-outline-danger btn-sm col-sm-20 align-content-md-center">LOG OUT </Link>
                    </div>
                </div>
                <div className="main">
                            {this.state.clickedInventory ? (
                                    <Inventory/>
                                    ):(

                                <section style={ sectionStyle }>

                                    <div className="col-sm-20 align-content-md-center">
                                        <form onSubmit={this.onSubmit}>
                                <div className="container">
                                <section style={form}>

                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>CREATE REQUISITION</b></h2></div>
                                        </label>
                                        

                                    <div className="col-sm-9 offset-sm-2 "><button className="btn btn-success col-sm-20 offset-sm-1 align-content-md-center" onClick={this.handleClickInventory}>SHOW INVENTORY</button>
                                    </div>
                                    
                                </section></div></form>

                                    </div>
                                </section>)}
            </div>
            </div>

        )
    }
}
