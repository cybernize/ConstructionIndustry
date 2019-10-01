import React,{Component} from 'react';
import '../css/siteManager.css';
import siteManagerHome from '../Images/siteManagerHome.jpg';
import siteManager from '../Images/siteManager.jpg';
import {NavLink} from "react-router-dom";
import {Link,Redirect } from "react-router-dom";

const siteManager1 ={
    paddingLeft: "40px",
    paddingRight:"40px",
    fontSize:"5px",
};

export default class extends Component{
    render(){
        return(
            <div>
                <div className="sidenav">
                    <br/>
                    <section style={ siteManager1 }>
                        <img src={siteManager} width="150px" height="160px"/><br/><br/>
                        <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Site Manager</h6>
                    </section>
                    <br/>
                    <NavLink to={'/SiteManagerHome'}>HOME</NavLink><br/>
                    <NavLink to={'/ViewPurchaseOrder'}>VIEW PURCHACE ORDER</NavLink><br/>
                    <NavLink to={'/SendSupplier'}>SEND PURCHASE ORDERS</NavLink><br/>
                    <NavLink to={'/CreatePurchaceOrder'}>APPROVAL REQUISITIONS</NavLink><br/>
                    <a href="#">INVENTORY DETAILS</a><br/>
                  
                    <Link to={'/Home'}><button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit">LOG OUT </button></Link>
                </div>
                <div className="main">
                    <h2> Home Page </h2>
                    <img src={siteManagerHome} width="1080px" height="500px"/>

                </div>
            </div>
        )
    }

};