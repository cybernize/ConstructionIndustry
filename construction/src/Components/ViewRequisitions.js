import React, {Component} from 'react';
import construction from "../Images/ccc.jpg";
import '../css/authzEmployee.css';
import {Link,NavLink} from "react-router-dom";
import auzEmployee from '../Images/auzEmployee.jpg';
import axios from 'axios';

// const sectionStyle = {
//     width: "1080px",
//     height: "500px",
//     opacity: 0.80,
//     paddingRight:"303px",
//     paddingLeft:"200px",
//     marginLeft: "54px",
//     backgroundImage: `url(${construction})`
// };
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

export default class ViewRequisitions extends Component{

    state={
        requisitions:[],
    };

    componentDidMount(){
        axios.get('http://localhost:3003/requisitions')
        .then(res =>{
            console.log(res);
            this.setState({requisitions:res.data})
        })
           
    }
    deleteOnSubmit(e){
        e.preventDefault();
        axios.delete('http://localhost:3003/requisitions')
        .then(res=>{
            console.log(res);
            this.setState({requisitions:res.data});
        })
        alert('Are you sure want to Delete !!!')
    }
   
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
                    <a href="#">SERVICES</a><br/>

                    <Link to={'/Home'}><button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit">LOG OUT </button></Link>
                </div>

                    <div className="container">
                        {/* <section style={ sectionStyle }> */}
                           
                             <div className="col-sm-20 offset-sm-1 align-content-md-center">
                                <form onSubmit={this.onSubmit}>
                                <div className="container"><br/>
                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                ALL REQUISITION LISTS</b></h2></div><br/>
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
                                                        <td>{q.AccountNo}</td>
                                                        <td><button className="btn btn-success col-sm-20 offset-sm-0">Update</button>&nbsp;
                                                        <button className="btn btn-danger col-sm-20 offset-sm-0" onClick={this.deleteOnSubmit}>Delete</button></td>
                                                    </tr>)}</tbody>
                                                    </table>
                                        </div><br/><br/><br/>
                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to={'/AuthzEmployeeHome'}><button className="btn btn-dark col-sm-20 offset-sm-1 align-content-md-center">back</button></Link>
                                    </div>
                                    <br/>
                                </div></form>
                         </div>
                                {/* </section> */}
            </div>
            </div>

        )
    }
}
