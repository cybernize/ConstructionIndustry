import React, {Component} from 'react';
import siteManager from '../Images/sitemanager.jpeg';
import '../css/authzEmployee.css';
import {Link,NavLink} from "react-router-dom";
import axios from 'axios';

const siteManager1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};


export default class SendPurchaseOrder extends Component{

    state={
        purchaseOrders:[],
    };

    componentDidMount(){
        axios.get('http://localhost:3003/purchaseOrder/')
        .then(res =>{
            console.log(res);
            this.setState({purchaseOrders:res.data})
        })
           
    }

    approveOnSubmit(e, id) {
        e.preventDefault();
        axios.get('http://localhost:3003/purchaseOrder/changeStatusSend/'+id)
            .then(res=>{
                console.log(res)
                axios.get('http://localhost:3003/purchaseOrder/')
                    .then(res =>{
                        this.setState({purchaseOrders:res.data})
                    })
            })

        }

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
                        <li><NavLink to={'/CreatePurchaceOrder'}>APPROVED REQUISITIONS</NavLink></li>
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
                                    <h2><b>SEND PURCHASE ORDERS TO SUPPLIERS</b></h2></div>
                                </label>
                                <div>
                                    <table border='1' cellSpacing='1' cellPadding='4'>
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
                                        <tbody>{this.state.purchaseOrders.map(p =>
                                            <tr>
                                                <td>{p.siteName}</td>
                                                <td>{p.itemName}</td>
                                                <td>{p.type}</td>
                                                <td>{p.quantity}</td>
                                                <td>{p.total}</td>
                                                <td>{p.deliveryDate}</td>
                                                <td><button className="btn btn-danger col-sm-20 offset-sm-0" onClick={(e)=> this.approveOnSubmit(e,p._id)}>SEND</button></td>
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
