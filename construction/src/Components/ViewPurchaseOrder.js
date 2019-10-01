import React, {Component} from 'react';
import siteManager from '../Images/siteManager.jpg';
import '../css/authzEmployee.css';
import {Link,NavLink} from "react-router-dom";
import axios from 'axios';

const siteManager1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};


export default class ViewPurchaseOrder extends Component{

    state={
        purchaseOrders:[],
    };

    componentDidMount(){
        axios.get('http://localhost:3003/purchaseOrder')
        .then(res =>{
            console.log(res);
            this.setState({purchaseOrders:res.data})
        })
           
    }

        deleteOnSubmit(e,id){
            e.preventDefault(e);
            axios.delete('http://localhost:3003/purchaseOrder/' +id)
            .then(res =>{
                console.log(res);
                axios.get('http://localhost:3003/purchaseOrder')
                     .then(res =>{
                          console.log(res);
                          this.setState({purchaseOrders:res.data})
                     })

            })
        }



    render(){
        return(
            <div><br/><br/>
                <div className="sidenav">
                    <br/>
                    <section style={ siteManager1 }>
                        <img src={siteManager} width="150px" height="160px"/><br/><br/>
                        <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Site Manager</h6>
                    </section>
                    <br/>
                    <NavLink to={'/SiteManagerHome'}>HOME</NavLink><br/>
                    <NavLink to={'/ViewPurchaseOrder'}>VIEW PURCHACE ORDER</NavLink><br/>
                    <a href="#">MATCHING ITEMS</a><br/>
                    <a href="#">SEARCH PURCHASE ORDERS</a><br/>
                    <NavLink to={'/CreatePurchaceOrder'}>APPROVED REQUISITIONS</NavLink><br/>
                 
                    <Link to={'/Home'}><button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit">LOG OUT </button></Link>

                </div>
                    <div className="container">
                             <div className="col-sm-20 offset-sm-1 align-content-md-center">
                                <form onSubmit={this.onSubmit}>
                                <div className="container"><br/>

                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                VIEW PURCHASE ORDERS</b></h2></div><br/>
                                        </label>
                                        <br/><div>
                                            <table border='1' cellSpacing='1' cellPadding='4'>
                                                <thead><tr>                                   
                                                        <th>Site Name</th>
                                                        <th>Item Name</th>
                                                        <th>Type</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                        <th>Delivery Date/Time</th>
                                                        <th>Actions</th>
                                                    </tr></thead>
                                                    <tbody>{this.state.purchaseOrders.map(p =>
                                                        <tr>
                                                        <td>{p.siteName}</td>
                                                        <td>{p.itemName}</td>
                                                        <td>{p.type}</td>
                                                        <td>{p.quantity}</td>
                                                        <td>{p.total}</td>
                                                        <td>{p.deliveryDate}</td>
                                                        <td><button className="btn btn-success col-sm-20 offset-sm-0">Update</button>&nbsp;
                                                        <button className="btn btn-danger col-sm-20 offset-sm-0" onClick={(e)=> this.deleteOnSubmit(e,p._id)}>Delete</button></td>
                                                    </tr>)}</tbody>
                                                    </table>
                                        </div><br/>
                                </div></form>

                                    </div>
                        </div>
            </div>

        )
    }
}
