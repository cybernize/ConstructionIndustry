import React,{Component} from 'react';
import axios from 'axios';

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
                quantity:'',
                total:'',
                deliveryDate:''
            }
            this.onChange = this.onChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);   
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
  
    onSubmit(e){
        console.log(Date.now());
        e.preventDefault();

        axios.post('http://localhost:3003/purchaseOrder', {
            siteName:this.state.siteName,
            itemName:this.state.itemName,
            type:this.state.type,
            quantity:this.state.quantity,
            total:this.state.total,
            deliveryDate:this.state.deliveryDate,
            createdAt: Date.now()

      }).then((purchaseOrderDetails)=>{
        document.getElementById('sname').value = "";
        document.getElementById('iname').value = "";
        document.getElementById('type').value = "";
        document.getElementById('qty').value = "";
        document.getElementById('total').value = "";
        document.getElementById('deliveryDate').value = "";
    
        alert('Purchase Orders have been Created Successfully')
        console.log(purchaseOrderDetails)
      }).catch((err)=>{
        console.log(err)
      })
    }


    render() {
    return(
        <div>
                 <div className="container">
                <div className="col-sm-20 offset-sm-1 align-content-md-center">

                    <form></form>
                            <br/>
                            <form action="" className="was-validated ">
                                <section style={ form }><br/>
                                <center><h2>PURCHASE ORDER</h2></center>
                                
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
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Total : </b></label><br></br>
                                        <input type="number" className="form-control" id="total" placeholder="Enter total" name="total" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Delivery Date : </b></label><br></br>
                                        <input type="Date" className="form-control" id="deliveryDate" placeholder="Enter Date" name="deliveryDate" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>
                                    </div>
                                
                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <br/>
                                        <button className="btn btn-primary offset-md-1" onClick={this.onSubmit}>SEND PURCHASE ORDER</button>
                                        <button className="btn btn-secondary offset-md-1 " >Cancel</button>
                                    </div>
                                    <br/>
                                </section>
                            </form>
                        </div>
                </div>
            </div>
    )
}

}