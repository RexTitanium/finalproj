import React, {Component} from 'react';

class Contact extends Component{
    render() {
        return (
             <div className="container contact-form">
                 <div className = "col-12 col-md-5">
                     <h1>SAMYAK SHAH</h1>
                 </div>
                 <div className="col-12 col-md-5">
                     <input type="text" className="fa fa-pen"  placeholder="name"/>
                 </div>
             </div>
        );
    }
}

export default Contact;