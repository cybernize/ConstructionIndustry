import React, {Component} from 'react';
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
    deleteOnSubmit(e,id){
       e.preventDefault();
        axios.delete('http://localhost:3003/requisitions/'+id)
        .then(res=>{
            console.log(res);
            axios.get('http://localhost:3003/requisitions')
                .then(res =>{
                    this.setState({requisitions:res.data})
                })
        })
    }
   
    // onCkickDelete(q){
    //     axios.post('http://localhost:3003/requisitions'+q._id)
    //     .then(response => {
    //         axios.get('http://localhost:3003/requisitions')
    //         .then(data => {
    //             console.log(data)
    //             this.setState({
    //                 data: data.data
    //             })
        
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

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
                                                        <th>Actions</th>
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
                                                        <button className="btn btn-danger col-sm-20 offset-sm-0"onClick={(e) => this.deleteOnSubmit(e,q._id)}>Delete</button></td>
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
