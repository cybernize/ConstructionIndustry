import React,{Component} from 'react';
import '../css/siteManager.css';
import siteManagerHome from '../Images/siteManager1.jpeg';
import siteManager from '../Images/sitemanager.jpeg';
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
                    <section style={ siteManager1 }>
                        <img src={siteManager} width="100%" height="160px"/>
                        <h6 className="text-center">Site Manager</h6>
                    </section>
                    <ul className="side-nav-menu">
                        <li><NavLink to={'/SiteManagerHome'}>HOME</NavLink></li>
                        <li><NavLink to={'/ViewPurchaseOrder'}>VIEW PURCHACE ORDER</NavLink></li>
                        <li><NavLink to={'/SendSupplier'}>SEND PURCHASE ORDERS</NavLink></li>
                        <li><NavLink to={'/CreatePurchaceOrder'}>APPROVAL REQUISITIONS</NavLink></li>
                        <li><a href="#">INVENTORY DETAILS</a></li>
                    </ul>
                    <div className="p-3">
                        <Link to={'/Home'} className="btn btn-outline-danger btn-sm col-sm-20 align-content-md-center">LOG OUT </Link>
                    </div>
                </div>
                <div className="main">
                    <h2> Home Page </h2>
                    <img src={siteManagerHome} width="100%"/>

                </div>
            </div>
        )
    }

};