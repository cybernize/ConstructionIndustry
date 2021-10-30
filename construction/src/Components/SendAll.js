import React, {Component} from 'react';
import '../css/supplier.css';
import {Link,NavLink} from "react-router-dom";
import axios from 'axios';
import supplierPic from '../Images/supplier.jpeg';

const supplier ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

export default class ApprovedAll extends Component{

    state={
        purchaseOrders:[],
    };

    componentDidMount(){
        axios.get('http://localhost:3003/purchaseOrder/isApproved')
        .then(res =>{
            console.log(res);
            this.setState({purchaseOrders:res.data})
        })
           
    }
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
                    </ul>
                    <div className="p-3">
                        <Link to={'/Home'} className="btn btn-outline-danger btn-sm col-sm-20 align-content-md-center">LOG OUT </Link>
                    </div>
                </div>
                <div className="main">
                    <div className="col-sm-20 align-content-md-center">
                        <form onSubmit={this.onSubmit}>
                            <div className="container">
                                <label className="form-check-label">
                                    <div className="font-weight-danger align-content-md-center">
                                    <h2><b>SEND PURCHASE ORDER LISTS</b></h2></div>
                                </label>
                                <div>
                                    <table border='2' cellSpacing='1' cellPadding='4'>
                                        <thead>
                                            <tr>                       
                                                <th>Site Name</th>
                                                <th>Item Name</th>
                                                <th>Type</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Delivery Date/Time</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>{this.state.purchaseOrders.map((p) => 
                                                <tr>
                                                <td>{p.siteName}</td>
                                                <td>{p.itemName}</td>
                                                <td>{p.type}</td>
                                                <td>{p.quantity}</td>
                                                <td>{p.total}</td>
                                                <td>{p.deliveryDate}</td>
                                                <td>Send OK</td>
                                            </tr>)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
