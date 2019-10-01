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
                                <div className="container"><br/>
                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                ALL SUPPLIER LISTS</b></h2></div><br/>
                                        </label>
                                        <br/><div>
                                            <table border='2' cellSpacing='1' cellPadding='4'>
                                                <thead><tr>                       
                                                        <th>Company Name</th>
                                                        <th>Site Name</th>
                                                        <th>Email</th>
                                                        <th>Registration No</th>
                                                        <th>Contact No</th>
                                                        <th>Contact Person</th>
                                                        <th>Actions</th>
                                                    </tr></thead>
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
                                        </div><br/><br/>
                                </div></form>
                         </div>
            </div>
            </div>

        )
    }
}
