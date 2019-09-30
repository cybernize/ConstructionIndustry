import React,{Component} from 'react';
import '../css/supervisor.css';
import supervisorHome from '../Images/supervisorHome.jpg';
import supervisor from '../Images/supervisor.jpg';
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
                <br/>
                <section style={ supervisor1 }>
                <img src={supervisor} width="150px" height="160px"/>
                    <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supervisor</h6>
                </section>
                <br/>
                <NavLink to={'/SupervisorHome'}>HOME</NavLink><br/>
                <a href="#">APPROVED ALL REQUISIONS</a><br/>
                <a href="#">DISAPPROVED LIST</a><br/>
                <a href="#">PENDING REQUISITIONS</a><br/>
                
                <Link to={'/Home'}><button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit">LOG OUT </button></Link>
            </div>
            <div className="main">
            <h2> Home Page</h2>
                <img src={supervisorHome} width="1080px" height="500px"/>

            </div>
            </div>
        )
    }

};