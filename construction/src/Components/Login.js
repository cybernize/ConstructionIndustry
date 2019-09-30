import React,{Component} from 'react';
import {Link,Redirect } from "react-router-dom";
import Background from '../Images/bg2.jpg';
import createBrowserHistory from 'history/createBrowserHistory';
import axios from 'axios';
import SiteManagerHome from './SiteManagerHome';
const browserHistory = createBrowserHistory();

const sectionStyle = {
    width: "1100px",
    height: "500px",
    opacity: 0.7,
    backgroundImage: `url(${Background})`
};

const form ={
    width: "550px", /* Full width */
    height: "200",/* Full height */
    border: "3px solid black",
};


export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    
    

    // updateUsername(username) {
    //     this.setState({
    //         username: username.target.value
    //     });
    // }

    // updatePassword(password) {
    //     this.setState({
    //         password: password.target.value
    //     });
    // }

    render() {
        const loginToSystem = (e) =>{
            e.preventDefault();
            console.log(this.state.password);
            if(this.state.username==='sitemanager'&&this.state.password==='sitemanager') {
                return <Redirect to={'SiteManagerHome'}/>
            }else if(this.state.username==='supervisor' && this.state.password==='supervisor'){
                return <Link to={'/SupervisorHome'}/>
            }else if(this.state.username==='suppiler' && this.state.password==='suppiler') {
               return<Link to={'/SupplierHome'}/>
            }else if(this.state.username==='employee' && this.state.password==='employee') {
               return <Link to={'/AuthzEmployeeHome'}/>
            };
        };
        return(
            <div className="container">
            <div style={{marginTop: 10}}>
                <br/>
                <section style={ sectionStyle }>
                    <div className="col-sm-20 offset-sm-1 align-content-md-center">

                        <form>
                                <br/>
                                <form action="" className="was-validated ">
                                    <section style={ form }><br/>
                                        <div className="col-sm-9 offset-sm-2 ">
                                            <label htmlFor="uname" >E-mail : </label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" 
                                            onChange={event => this.onChange(event)}required/>
                    
                                
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div>
                                        <div className="col-sm-9 offset-sm-2">
                                            <label htmlFor="password">Password : </label>
                                            <input type="password" className="form-control" id="password" placeholder="Enter password" size="10" name="password" 
                                            onChange={event => this.onChange(event)}required/>
                                               
                                           
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div><br/>
                                        <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" onClick={loginToSystem}>Login</button>
                                            <Link to={'/Home'}><button className="btn btn-outline-dark col-sm-20 offset-sm-1 align-content-md-center" >Back</button></Link><br/><br/>
                                            <h6><i>If you are not already have an account Register here</i></h6><br/><br/>
                                            <center><Link to={'/Register'}><button className="btn btn-danger col-sm-60 offset-sm-1 align-content-md-center" >Register</button></Link></center>
                                        </div>
                                        <br/>
                                    </section>
                                </form>
                            

                        </form>
                        <br/>

                    </div>
                </section>
            </div>
            </div>
        );
    }



}