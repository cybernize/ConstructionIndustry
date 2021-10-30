import React,{Component} from 'react';
import '../css/supplier.css';
import supplierHome from '../Images/supplier (2).jpeg';
import supplierPic from '../Images/supplier.jpeg';
import {Link,NavLink} from "react-router-dom";

const supplier ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

export default class extends Component{
    render(){
        return(
            <div>
                <div className="sidenav" id="supplier">
                    <section style={supplier}>
                        <img src={supplierPic} width="100%" height="160px"/>
                        <h6 className="text-center">Procument Staff</h6>
                    </section>
                    <ul className="side-nav-menu">
                        <li><NavLink to={'/SiteManagerHome'}>HOME</NavLink></li>
                        <li><NavLink to={'/ViewSupplierList'}>VIEW ADD SUPPLIERS</NavLink></li>
                        <li><NavLink to={'/AddSupplier'}>ADD SUPPLIERS</NavLink></li>
                        <li><NavLink to={'/SendAll'}>SENT PURCHASE ORDERS</NavLink></li>
                    </ul>
                    <div className="p-3">
                        <Link to={'/Home'} className="btn btn-outline-danger btn-sm col-sm-20 align-content-md-center">LOG OUT </Link>
                    </div>
                </div>
                <div className="main">
                    <h2> Home Page</h2>
                    <img src={supplierHome} width="100%"/>
                </div>
            </div>
        )
    }

};