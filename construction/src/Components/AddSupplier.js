import React, {Component} from 'react';
import construction from "../Images/construction.png";
import '../css/supplier.css';
import {Link,NavLink} from "react-router-dom";
import supplierPic from '../Images/supplier.jpeg';
import SupplierDetails from './SupplierDetails';

const sectionStyle = {
    width: "1080px",
    height: "500px",
    opacity: 0.80,
    paddingRight:"303px",
    paddingLeft:"190px",
    marginLeft: "50px",
    backgroundImage: `url(${construction})`
};
const supplier ={
    paddingLeft: "40px",
    paddingRight:"40px"
};
const form ={
    width: "603px", /* Full width */
    height: "600",/* Full height */
    position:"center",
    border: "5px solid brown",
};

export default class extends Component{
    constructor(props) {
        super(props);

        this.state = {
            clickedAddSupplier: false,
        }
        this.handleClickedAddSupplier = this.handleClickedAddSupplier.bind(this);
    }

    handleClickedAddSupplier() {
        this.setState({
            clickedAddSupplier: !this.state.clickedAddSupplier
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
                            {this.state.clickedAddSupplier? (
                                    <SupplierDetails/>
                                    ):(

                        <section style={ sectionStyle }>
                                    <div className="col-sm-20 align-content-md-center">
                                        <form onSubmit={this.onSubmit}>
                                <div className="container">
                                <section style={form}>

                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>ADD SUPPLIERS</b></h2></div>
                                        </label>
                                        

                                    <div className="col-sm-9 offset-sm-2 ">
                                      <button className="btn btn-success col-sm-20 offset-sm-1 align-content-md-center" onClick={this.handleClickedAddSupplier}>ADD</button>
                                    </div>
                                    
                                </section></div></form>

                                    </div>
                                </section>)}
            </div>
            </div>

        )
    }
}
