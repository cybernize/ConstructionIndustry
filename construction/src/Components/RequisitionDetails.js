import React,{Component} from 'react';
import axios from 'axios';
import {Link,Redirect } from "react-router-dom";

const form ={
    width: "750px", /* Full width */
    height: "200",/* Full height */
    border: "3px solid black",
};


export default class extends Component{
    constructor(props){
        super(props);
            this.state={
                siteName:'',
                itemName:'',
                type:'',
                quantity:0,
                perAgreedPrice:0,
                perApprovedSupplier:'',
                tprice:0,
                AccountNo:''
            }
            this.onChange = this.onChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);   
    }

    onChange(e) {
        var name = e.target.name;
        this.setState({
            [e.target.name]: e.target.value
        }, ()=>{this.changeTotalPrice(name)})

    }

    changeTotalPrice(name){
        if(name == 'perAgreedPrice' || name == 'quantity') {
            console.log(this.state)
            this.setState({
                tprice: this.state.perAgreedPrice * this.state.quantity
            })
        }
    }
        

  
    onSubmit(e){
        console.log(Date.now());
        e.preventDefault();
        let status = 1;
        if(this.state.tprice > 100000)
            status = 0
        axios.post('http://localhost:3003/requisitions', {
            siteName:this.state.siteName,
            itemName:this.state.itemName,
            type:this.state.type,
            quantity:this.state.quantity,
            perAgreedPrice:this.state.perAgreedPrice,
            perApprovedSupplier:this.state.perApprovedSupplier,
            tprice:this.state.tprice,
            AccountNo: this.state.AccountNo,
            createdAt: Date.now(),
            status: status

      }).then((requisitions)=>{
        document.getElementById('sname').value = "";
        document.getElementById('iname').value = "";
        document.getElementById('type').value = "";
        document.getElementById('qty').value = "";
        document.getElementById('price').value = "";
        document.getElementById('supplier').value = "";
        document.getElementById('tprice').value="";
        document.getElementById('accNo').value = "";
        this.setState({
            siteName:'',
            itemName:'',
            type:'',
            quantity:0,
            perAgreedPrice:0,
            perApprovedSupplier:'',
            tprice:0,
            AccountNo:''})
        alert('Requisitions Created Successfully')
        console.log(requisitions)
      }).catch((err)=>{
        console.log(err)
      })
    }


    render() {
    return(
        <div>
                <div className="col-sm-20 offset-sm-1 align-content-md-center">
                    <form>
                        <div className="container">
                            <form action="" className="was-validated ">
                                <section style={ form }><br/>
                                <center><h2>REQUISITION DETAILS</h2></center>
                                
                                    <div className="form-row col-sm-20 offset-sm-1 align-content-md-center">
                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Site Name : </b></label>
                                        <input type="text" className="form-control" id="sname" placeholder="Enter SiteName" name="siteName" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                         <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Item Name:</b> </label><br></br>
                                        <input type="text" className="form-control" id="iname" placeholder="Enter item Name" name="itemName" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Type : </b></label><br></br>
                                        <input type="text" className="form-control" id="type" placeholder="Enter type" name="type" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>
                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Quantity : </b></label><br></br>
                                        <input type="number" className="form-control" id="qty" placeholder="Enter quantity" name="quantity"
                                               onChange={event => this.onChange(event)} required/><br/>
                                        </div>

                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>PerAgreed Price : </b></label><br></br>
                                        <input type="number" className="form-control" id="price" placeholder="Enter price" name="perAgreedPrice"
                                               onChange={event => this.onChange(event)} required/><br/>
                                        </div>

                                        <div className = "col-md-4 mb-3 col-sm-20 offset-sm-1">
                                            <label htmalFor="details"><b>PerApproved supplier Name :</b></label>
                                            <input type="text" className="form-control" id="supplier" placeholder="Enter supplier" name="perApprovedSupplier"
                                             onChange={event => this.onChange(event)} required/><br/>
                                        </div>

                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Total Price : </b></label><br></br>
                                        <input type="text" className="form-control" id="tprice" name="tprice" disabled
                                          value={this.state.tprice} onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                        <div className = "col-sm-9 offset-sm-1 align-content-md-center">
                                            <label htmalFor="details"><b>Funding Account No</b></label>
                                            <input type="number" className="form-control" id="accNo" placeholder="Enter AccountNo" name="AccountNo"
                                             onChange={event => this.onChange(event)} required/><br/>
                                        </div>
                                    </div>
                                
                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <br/>
                                        <button className="btn btn-primary offset-md-1" onClick={this.onSubmit}>MAKE REQUISITION</button>
                                        <Link to={'/AuthzEmployeeHome'}><button className="btn btn-dark offset-md-1 " >Cancel</button></Link>
                                    </div>
                                    <br/>
                                </section>
                            </form>
                        </div>

                    </form>
                    <br/>

                </div>
        </div>

    )
}

}