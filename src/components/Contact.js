import React, {Component} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {Avatar, Tooltip, Zoom} from '@material-ui/core';
import "./styles/contact.scss"
class Contact extends Component{
    render() {
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
                        <p>If you have any questions or want to collaborate just fill out the form, and I will answer back to you shortly. If you want to contact me directly, you can mail me at</p>
                        <Tooltip TransitionComponent={Zoom} title="Gmail" arrow>
                            <a href="mailto:s4samyak@gmail.com" className="mail-link"> s4samyak@gmail.com</a>
                        </Tooltip>
                    </motion.div>
                
                    
                 </motion.div>
                 
                 
                 <div className=" col-15 col-md-5">
                    <div className="contact-form">
                        <form className="contact-form" method="post" data-netlify="true">
                            <div className="group">      
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Name</label>
                            </div>
                        
                            <div className="group">      
                                <input type="email" id="email" name="email" required placeholder=""/>
                                
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label for="email">Email</label>
                            </div>
                            <div className="group">      
                                <input type="text" required className="textbox"/>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Subject</label>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <button type="submit" className="btn btn-sm animated-button send">Submit</button>
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