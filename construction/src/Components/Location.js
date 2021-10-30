import React,{Component} from 'react';
import location from '../Images/location.jpg';

const background = {
    width: "1100px",
    height: "500px",
    opacity: 0.70,
    paddingRight:"303px",
    paddingLeft:"200px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${location})`
};

export default class extends Component {

        render(){
            return(
                
                <div className="container">
                    <section className="row">
                        <div className="col-md-6 p-5">
                            <h3>OFFICIES</h3>
                            <div>
                                <h6>88/1 Warapitiya Road</h6>
                                <h6>Kandy</h6>
                                <h6>Sri Lanka</h6>
                                <h6>925.602.4710 main</h6>
                                <h6>925.602.4720 fax</h6>
                            </div>
                            <hr/>
                            <div>
                                <h6>38 Ruban Peiris Mawatha</h6>
                                <h6>Dehiwala-Kalubowila</h6>
                                <h6>Sri Lanka</h6>
                                <h6>925.602.4710 main</h6>
                                <h6>925.602.4720 fax</h6>
                            </div>
                        </div>
                        <div className="col-md-6" style={background}>

                        </div>
                    </section>
                </div>

            )
        }


};