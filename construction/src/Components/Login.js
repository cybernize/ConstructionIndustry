import React,{Component} from 'react';
import {Link,Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import Background from '../Images/bg2.jpg';
import createBrowserHistory from 'history/createBrowserHistory';
import axios from 'axios';

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


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        // this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    // onChange(e){
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }

    // onSubmit(e){
    //     e.preventDefault();

    //     const user={
    //         email:this.state.email,
    //         password:this.state.password
    //     }
    // }
    

    updateUsername(username) {
        console.log(username.target.value)
        this.setState({
           email: username.target.value
        });
    }

    updatePassword(password) {
        console.log(password.target.value)
        this.setState({
            password: password.target.value
        });
    }

    render() {
        const loginToSystem = (e) =>{
            e.preventDefault();
            console.log(this.state.email+" "+this.state.password)
            axios.post('http://localhost:3003/register/user',{
                email: this.state.email,
                password: this.state.password
            })
            .then((user)=>{
                console.log(user.data.role);
                if(user.data.role ==='sitemanager') {
                    browserHistory.push('/SiteManagerHome');
                }else if(user.data.role ==='supervisor'){
                    browserHistory.push('/supervisorHome');
                }else if(user.data.role ==='suppiler') {
                    browserHistory.push('/SupplierHome');
                }else if(user.data.role ==='employee') {
                  //  this.context.router.history.push("/AuthzEmployeeHome")
                   return <Redirect to='/Home' />
                }else{
                    browserHistory.push('/AuthzEmployeeHome');
                }
              }).catch((err)=>{
                console.log(err)
              })

        
        };
        return(

            <div style={{marginTop: 10}}>
                <br/>
                <section style={ sectionStyle }>
                    <div className="col-sm-20 offset-sm-1 align-content-md-center">

                        <form onSubmit={this.onSubmit}>
                            <div className="container">
                                <br/>
                                <form action="" className="was-validated ">
                                    <section style={ form }><br/>
                                        <div className="col-sm-9 offset-sm-2 ">
                                            <label htmlFor="uname" >E-mail : </label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" onChange={(e) => this.updateUsername(e)}
                                                required/>
                                
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div>
                                        <div className="col-sm-9 offset-sm-2">
                                            <label htmlFor="password">Password : </label>
                                            <input type="password" className="form-control" id="password" placeholder="Enter password" size="10" name="password" onChange={(e) => this.updatePassword(e)}
                                               required/>
                                           
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div><br/>
                                        <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" onClick={loginToSystem}>Login</button>
                                            <Link to={'/Home'}><button className="btn btn-outline-success col-sm-20 offset-sm-1 align-content-md-center" >Back</button></Link>
                                        </div>
                                        <br/>
                                    </section>
                                </form>
                            </div>

                        </form>
                        <br/>

                    </div>
                </section>
            </div>

        );
    }



}