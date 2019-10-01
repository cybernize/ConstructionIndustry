import React, {Component} from 'react';
import supervisor from '../Images/supervisor.jpg';
import '../css/supervisor.css';
import {Link,NavLink} from "react-router-dom";
import axios from 'axios';

const supervisor1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

export default class PendingRequisitions extends Component{

    state={
        requisitions:[],
    };

    componentDidMount(){
        axios.get('http://localhost:3003/requisitions/toBeApprovedSup')
        .then(res =>{
            console.log(res)
            this.setState({requisitions:res.data})
        })
           
    }
    deleteOnSubmit(e, id){
       e.preventDefault();
        axios.get('http://localhost:3003/requisitions/changeStatusDecline/'+id)
        .then(res=>{
            console.log(res)
            axios.get('http://localhost:3003/requisitions/toBeApprovedSup')
                .then(res =>{
                    this.setState({requisitions:res.data})
                })
        })
    }
    approveOnSubmit(e, id) {
        e.preventDefault();
        axios.get('http://localhost:3003/requisitions/changeStatusApprove/'+id)
            .then(res=>{
                console.log(res)
                axios.get('http://localhost:3003/requisitions/toBeApprovedSup')
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
              <div className="sidenav" id="side">
                <br/>
                <section style={ supervisor1 }>
                <img src={supervisor} width="150px" height="160px"/>
                    <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supervisor</h6>
                </section>
                <br/>
                <NavLink to={'/SupervisorHome'}>HOME</NavLink><br/>
                <NavLink to={'/ApprovedAll'}>APPROVED ALL REQUISIONS</NavLink><br/>
                {/* <NavLink to={'/DeclineRequisitions'}>DISAPPROVED REQUISIONS</NavLink><br/> */}
                <NavLink to={'/PendingRequisitions'}>PENDING REQUISITIONS</NavLink><br/>
                
                
                <Link to={'/Home'}><button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit">LOG OUT </button></Link>
            </div>
                    <div className="container">
                           
                             <div className="col-sm-20 offset-sm-1 align-content-md-center">
                                <form onSubmit={this.onSubmit}>
                                <div className="container">
                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                PENDING STAGE REQUISITION LISTS</b></h2></div><br/>
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
                                                        <th>Total Price</th>
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
                                                        <td>{q.tprice}</td>
                                                        <td>{q.AccountNo}</td>
                                                        <td><button className="btn btn-success col-sm-20 offset-sm-0" onClick={(e)=> this.approveOnSubmit(e, q._id)}>APPROVE</button>&nbsp;
                                                        <button className="btn btn-danger col-sm-20 offset-sm-0"onClick={(e)=> this.deleteOnSubmit(e, q._id)}>DECLINE</button></td>
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
