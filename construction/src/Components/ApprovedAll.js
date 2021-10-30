import React, {Component} from 'react';
import supervisor from '../Images/supervisor.jpeg';
import '../css/supervisor.css';
import {Link,NavLink} from "react-router-dom";
import axios from 'axios';

const supervisor1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

export default class ApprovedAll extends Component{

    state={
        requisitions:[],
    };

    componentDidMount(){
        axios.get('http://localhost:3003/requisitions/isApproved')
        .then(res =>{
            console.log(res);
            this.setState({requisitions:res.data})
        })
           
    }


    render(){
        return(
            <div>
                <div className="sidenav" id="side">
                    <section style={ supervisor1 }>
                    <img src={supervisor} width="100%" height="160px"/>
                        <h6 className="text-center">Project Manager</h6>
                    </section>
                    <ul className="side-nav-menu">
                        <li><NavLink to={'/SiteManagerHome'}>HOME</NavLink></li>
                        <li><NavLink to={'/ApprovedAll'}>APPROVED ALL REQUISIONS</NavLink></li>
                        <li><NavLink to={'/PendingRequisitions'}>PENDING REQUISITIONS</NavLink></li>
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
                                    <h2><b>ALL APPROVED REQUISITION LISTS</b></h2></div>
                                </label>
                                <div>
                                    <table border='2' cellSpacing='1' cellPadding='4'>
                                        <thead>
                                            <tr>                       
                                                <th>Site Name</th>
                                                <th>Item Name</th>
                                                <th>Type</th>
                                                <th>Quantity</th>
                                                <th>PerAgreed Price</th>
                                                <th>PerApproved Supplier</th>
                                                <th>Total Price</th>
                                                <th>Funding AccNo</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
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
                                                <td>Approved OK</td>
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
