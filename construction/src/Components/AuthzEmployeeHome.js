import React,{Component} from 'react';
import '../css/authzEmployee.css';
import {Link,NavLink} from "react-router-dom";
import authzEmployee from '../Images/authzEmployee.jpg';
import auzEmployee from '../Images/auzEmployee.jpg';


const authzEmployee1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

export default class extends Component{
    render(){
        return(
            <div>

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

                <div className="main">
                    <h2> Home Page</h2>
                    <img src={authzEmployee} width="1080px" height="500px"/>

                </div>
            </div>
        )
    }

};