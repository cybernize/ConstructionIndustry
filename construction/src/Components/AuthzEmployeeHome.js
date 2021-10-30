import React,{Component} from 'react';
import '../css/authzEmployee.css';
import {Link,NavLink} from "react-router-dom";
import authzEmployee from '../Images/authEmployee.jpeg';
import auzEmployee from '../Images/employees.jpeg';


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
                        <img src={auzEmployee} width="100%" height="160px"/><br/>
                        <h6 className="text-center">Employee</h6>
                    </section>
                    <br/>
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
                    <h2> Home Page</h2>
                    <img src={authzEmployee} width="1080px" height="500px"/>
                </div>
            </div>
        )
    }

};