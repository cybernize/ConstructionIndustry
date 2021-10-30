import React,{Component} from 'react';
import '../css/supervisor.css';
import supervisorHome from '../Images/supervisor1.jpeg';
import supervisor from '../Images/supervisor.jpeg';
import {NavLink} from "react-router-dom";
import {Link,Redirect } from "react-router-dom";


const supervisor1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

export default class extends Component{
    render(){
        return(
            <div>

            <div className="sidenav" id="side">
                <section style={ supervisor1 }>
                <img src={supervisor} width="100%" height="160px"/>
                    <h6 className="text-center">Project Manager</h6>
                </section>
                <ul className="side-nav-menu">
                    <li><NavLink to={'/SiteManagerHome'}>HOME</NavLink></li>
                    <li><NavLink to={'/ApprovedAll'}>APPROVED ALL REQUISIONS</NavLink></li>
                    <li><NavLink to={'/PendingRequisitions'}>PENDING REQUISITIONS</NavLink></li>
                </ul>
                <div className="p-3">
                    <Link to={'/Home'} className="btn btn-outline-danger btn-sm col-sm-20 align-content-md-center">LOG OUT </Link>
                </div>
            </div>
            <div className="main">
            <h2> Home Page</h2>
                <img src={supervisorHome} width="100%"/>

            </div>
            </div>
        )
    }

};