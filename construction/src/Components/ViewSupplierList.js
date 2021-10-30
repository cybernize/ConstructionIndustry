import React, {Component} from 'react';
import '../css/supplier.css';
import {Link,NavLink} from "react-router-dom";
import supplierPic from '../Images/supplier.jpeg';
import axios from 'axios';

const supplier ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

export default class ViewSupplierList extends Component{

    state={
        suppliers:[],
    };

    componentDidMount(){
        axios.get('http://localhost:3003/suppliers')
        .then(res =>{
            console.log(res);
            this.setState({suppliers:res.data})
        })
           
    }
    deleteOnSubmit(e,id){
       e.preventDefault();
        axios.delete('http://localhost:3003/suppliers/'+id)
        .then(res=>{
            console.log(res);
            axios.get('http://localhost:3003/suppliers')
                .then(res =>{
                    this.setState({suppliers:res.data})
                })
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
                                    <h2><b>ALL SUPPLIER LISTS</b></h2></div>
                                </label>
                                <div>
                                    <table border='2' cellSpacing='1' cellPadding='4'>
                                        <thead><tr>                       
                                                <th>Company Name</th>
                                                <th>Site Name</th>
                                                <th>Email</th>
                                                <th>Registration No</th>
                                                <th>Contact No</th>
                                                <th>Contact Person</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                            <tbody> {this.state.suppliers.map((q) => 
                                                <tr>
                                                <td>{q.companyName}</td>
                                                <td>{q.siteName}</td>
                                                <td>{q.email}</td>
                                                <td>{q.regNo}</td>
                                                <td>{q.cNo}</td>
                                                <td>{q.cPerson}</td>
                                                <td> <button className="btn btn-danger col-sm-20 offset-sm-0"onClick={(e) => this.deleteOnSubmit(e,q._id)}>Delete</button></td>
                                            </tr>)}</tbody>
                                            </table>
                                </div>
                                </div></form>
                         </div>
            </div>
            </div>

        )
    }
}
