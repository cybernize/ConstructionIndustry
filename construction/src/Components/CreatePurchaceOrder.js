import React,{Component} from 'react';
import siteManager from '../Images/siteManager.jpg';
import {NavLink} from "react-router-dom";
import {Link,Redirect } from "react-router-dom";
import'../css/siteManager.css';
import PurchaseOrderDetails from './purchaseOrderDetails';
import axios from "axios";

const siteManager1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

export default class extends Component{
    constructor(props){
        super(props);
        this.state ={
            clickedPurchaseOrder : false,
            requisitions: []
        }
        this.handleClickedPurchaseOrder = this.handleClickedPurchaseOrder.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3003/requisitions/isApproved')
            .then(res =>{
                console.log(res);
                this.setState({requisitions:res.data})
            })
    }

    handleClickedPurchaseOrder(){
        this.setState({
            clickedPurchaseOrder:!this.state.clickedPurchaseOrder
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

                {this.state.clickedPurchaseOrder? (
                     <PurchaseOrderDetails/>
                           ):(
           
                        <div className="col-sm-20 offset-sm-1 align-content-md-center">
                            <form onSubmit={this.onSubmit}>
                                <div className="container"><br/>
                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                CREATING PURCHACE ORDER</b></h2></div>
                                        </label><div>
                                        <table border='2' cellSpacing='1' cellPadding='4'>
                                                <thead><tr>                       
                                                        <th>Site Name</th>
                                                        <th>Item Name</th>
                                                        <th>Type</th>
                                                        <th>Quantity</th>
                                                        <th>PerAgreed Price</th>
                                                        <th>PerApproved Supplier</th>
                                                        <th>Total Price</th>
                                                        <th>Funding AccNo</th>
                                                        <th></th>
                                                    </tr></thead>
                                                    <tbody>{this.state.requisitions.map((q) =>
                                                    <tr>
                                                        <td>{q.siteName}</td>
                                                        <td>{q.itemName}</td>
                                                        <td>{q.type}</td>
                                                        <td>{q.quantity}</td>
                                                        <td>{q.perAgreedPrice}</td>
                                                        <td>{q.perApprovedSupplier}</td>
                                                        <td>{q.tprice}</td>
                                                        <td>{q.AccountNo}</td>
                                                        <td>
                                                        <button className="btn btn-success col-sm-20 offset-sm-0" onClick={this.handleClickedPurchaseOrder}>CREATE PURCHASE ORDER</button></td>
                                                    </tr>)}</tbody>
                                                    </table>
                                        </div>
                                </div></form>
                            </div>                                 
                    )}
            </div>
        )
    }

}