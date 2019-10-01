import React,{Component} from 'react';
import '../css/supplier.css';
import supplierHome from '../Images/supplierHome.jpg';
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
                    <br/>
                    <section style={supplier}>
                        <img src={supplierPic} width="150px" height="160px"/><br/>
                        <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supplier</h6>
                    </section>
                    <br/><br/>
                    <NavLink to={'/SupplierHome'}>HOME</NavLink><br/>
                    <NavLink to={'/ViewSupplierList'}>VIEW ADD SUPPLIERS</NavLink><br/>
                    <NavLink to={'/AddSupplier'}>ADD SUPPLIERS</NavLink><br/>
                    <NavLink to={'/SendAll'}>SENT PURCHASE ORDERS</NavLink><br/>

                    <Link to={'/Home'}><button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit">LOG OUT </button></Link>

                </div>
                <div className="main">
                    <h2> Home Page</h2>
                    <img src={supplierHome} width="1080px" height="500px"/>

                </div>
            </div>
        )
    }

};