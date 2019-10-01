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
            <div><br/><br/>
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
                
                    <Link to={'/Home'}><button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit">LOG OUT </button></Link>

                </div>
                    <div className="container">
                           
                             <div className="col-sm-20 offset-sm-1 align-content-md-center">
                                <form onSubmit={this.onSubmit}>
                                <div className="container">
                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                SEND PURCHASE ORDER LISTS</b></h2></div><br/>
                                        </label>
                                        <br/><div>
                                            <table border='2' cellSpacing='1' cellPadding='4'>
                                                <thead><tr>                       
                                                        <th>Site Name</th>
                                                        <th>Item Name</th>
                                                        <th>Type</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                        <th>Delivery Date/Time</th>
                                                        <th>Actions</th>
                                                    </tr></thead>
                                                    <tbody>{this.state.purchaseOrders.map((p) => 
                                                        <tr>
                                                        <td>{p.siteName}</td>
                                                        <td>{p.itemName}</td>
                                                        <td>{p.type}</td>
                                                        <td>{p.quantity}</td>
                                                        <td>{p.total}</td>
                                                        <td>{p.deliveryDate}</td>
                                                        <td>Send OK</td>
                                                    </tr>)}</tbody>
                                                    </table>
                                        </div><br/><br/>
                                </div></form>
                         </div>
            </div>
            </div>

        )
    }
}
