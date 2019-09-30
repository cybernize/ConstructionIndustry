import React, {Component} from 'react';
import authzEmployee from '../Images/authzEmployee.jpg';
import '../css/authzEmployee.css';
import {Link,NavLink} from "react-router-dom";
import auzEmployee from '../Images/auzEmployee.jpg';

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
            <div><br/><br/>
                
                <div className="sidenav" id="auzEmp">
                    <br/>
                    <section style={ authzEmployee1 }>
                        <img src={auzEmployee} width="150px" height="160px"/><br/>
                        <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Employee</h6>
                    </section>
                    <br/><br/>
                    <NavLink to={'/AuthzEmployeeHome'}>HOME</NavLink><br/>
                    <NavLink to={'/ViewRequisitions'}>SHOW REQUISIONS</NavLink><br/>
                    <NavLink to={'/createRequisition'}>CREATE RQUISITIONS</NavLink><br/>
                    <NavLink to={'/DeclineRequisitions'}>DISAPPROVED REQUISIONS</NavLink><br/>

                    <Link to={'/Home'}><button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit">LOG OUT </button></Link>
                </div>

                    <div className="container">
                            {this.state.clickedInventory ? (
                                    <Inventory/>
                                    ):(

                                <section style={ sectionStyle }>

                                    <div className="col-sm-20 offset-sm-1 align-content-md-center">
                                        <form onSubmit={this.onSubmit}>
                                <div className="container"><br/><br/>
                                <section style={form}><br/>

                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                CREATE REQUISITION</b></h2></div>
                                        </label>
                                        <br/>

                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <button className="btn btn-success col-sm-20 offset-sm-1 align-content-md-center" onClick={this.handleClickInventory}>SHOW INVENTORY</button>
                                    </div>
                                    <br/>
                                </section></div></form>

                                    </div>
                                </section>)}
            </div>
            </div>

        )
    }
}
