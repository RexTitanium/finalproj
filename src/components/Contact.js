import React, {Component} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {Avatar, Tooltip, Zoom} from '@material-ui/core';
import "./styles/contact.scss"


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
        this.resetForm = this.resetForm.bind(this);
    }
    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ 
              "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
  
      handleChange = e => this.setState({ [e.target.name]: e.target.value });

      resetForm(){
          this.setState({
              name: "",
              email: "",
              message: ""
          })
      }
    render() {
        const { name, email, message } = this.state;
        return (
            <div>
                <div  className="contact-us-header">
                    <Link to="/contactus"><img src="/assets/images/contact-us-banner.jpg"/></Link>
                </div>
             <div className="container form-group">
                 <motion.div 
                 initial={{x:'-50vw'}}
                 animate={{x:0}}
                 transition ={{ type:'spring', stiffness: 90}}
                 className = "col-12 col-md-5 form-header">
                     <h1>How to Contact :</h1>
                     <motion.div
                     initial={{y:'-10vw', opacity:0}}
                     animate={{y:0, opacity: 1}}
                     transition ={{ type:'spring', stiffness: 150, delay:0.5}}
                     >
                        <p>Form Service is currently down and will soon be up. If you want to connect to me , you can mail me at</p>
                        <Tooltip TransitionComponent={Zoom} title="Gmail" arrow>
                            <a href="mailto:s4samyak@gmail.com" className="mail-link"> s4samyak@gmail.com</a>
                        </Tooltip>
                    </motion.div>
                
                    
                 </motion.div>
                 
                 
                 <div className=" col-15 col-md-5">
                    <div className="contact-form">
                        <form className="contact-form" onSubmit={this.handleSubmit} name="contact" method="post" data-netlify="true"  data-netlify-honeypot="bot-field" >
                         <input type="hidden" name="form-name" value="contact" />
                            <p className="group">      
                                <input type="text" name="name" value={name} onChange={this.handleChange} required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Name</label>
                            </p>
                        
                            <p className="group">      
                                <input type="email" id="email" name="email" value={email} onChange={this.handleChange} required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label for="email">Email</label>
                            </p>
                            <p className="group">      
                                <input type="text" name="message" required className="textbox" value={message} onChange={this.handleChange}/>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Message</label>
                            </p>
                            <div className="col-md-3 col-sm-3 col-xs-6 buttons">
                                <button type="submit" className="btn btn-sm animated-button send">Submit</button>
                                <button type="button" className="btn btn-sm animated-button clear" onClick={this.resetForm}>Clear</button>
                            </div>
                    </form>
                </div>
                 </div>
             </div>
             </div>
        );
    }
}


export default Contact;