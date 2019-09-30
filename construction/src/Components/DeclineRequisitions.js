import React, {Component} from 'react';
import '../css/authzEmployee.css';
import {Link,NavLink} from "react-router-dom";
import auzEmployee from '../Images/auzEmployee.jpg';

const authzEmployee1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

const form ={
    width: "803px", /* Full width */
    height: "700",/* Full height */
    position:"center",
    border: "opx black",
};

export default class DeclineRequisitions extends Component{

    render(){
        return(
            <div><br/><br/>
               <div className="sidenav" id="auzEmp">
                    <br/>
                    <section style={ authzEmployee1 }>
                        <img src={auzEmployee} width="150px" height="160px"/><br/>
                        <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Employee</h6>
                    </section>
                    <br/><br/>
                    <NavLink to={'/AuthzEmployeeHome'}>HOME</NavLink><br/>
                    <NavLink to={'/ViewRequisitions'}>SHOW REQUISIONS</NavLink><br/>
                    <NavLink to={'/createRequisition'}>CREATE RQUISITIONS</NavLink><br/>
                    <NavLink to={'/DeclineRequisitions'}>DISAPPROVED REQUISIONS</NavLink><br/>

                    <Link to={'/Home'}><button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit">LOG OUT </button></Link>
                </div>

                    <div className="container">
                           
                             <div className="col-sm-20 offset-sm-1 align-content-md-center">
                                <form onSubmit={this.onSubmit}>
                                <div className="container"><br/>
                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                DISAPPROVED REQUISITION LISTS</b></h2></div><br/>
                                        </label>
                                        <br/><div>
                                            <table border='2' cellSpacing='1' cellPadding='4'>
                                                <thead><tr>                       
                                                        <th>Site Name</th>
                                                        <th>Item Name</th>
                                                        <th>Type</th>
                                                        <th>Quantity</th>
                                                        <th>PerAgreed Price</th>
                                                        <th>PerApproved Supplier</th>
                                                        <th>Funding AccNo</th>
                                                        <th>Actions</th>
                                                    </tr></thead>
                                                    <tbody>
                                                        <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>DISAPPROVED</td>
                                                    </tr></tbody>
                                                    </table>
                                        </div><br/><br/>
                                </div></form>
                         </div>
            </div>
            </div>

        )
    }
}
