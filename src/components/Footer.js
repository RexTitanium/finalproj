import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Footer.css'
import { makeStyles } from '@material-ui/core/styles';
import {Tooltip, Zoom} from '@material-ui/core';

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: "rgb(256,256,256)",
    },
    tooltip: {
      backgroundColor: "rgb(256, 256, 256)",
      color: "black",
      fontFamily: "Poppins"
    },
  }));
  
  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
  
    return <Tooltip arrow classes={classes} {...props} />;
  }
function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row">  
                <div className="col-4 col-sm-3 social">
                    <h4>TITANIUM ARTS</h4>
                    <div className=" logos">   
                        <BootstrapTooltip TransitionComponent={Zoom} title="Instagram" arrow placement="bottom-start"><a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/titaniumarts/"><i className="fa fa-instagram fa-lg"></i></a></BootstrapTooltip>
                        <BootstrapTooltip TransitionComponent={Zoom} title="Linkedin" arrow placement="bottom-start"><a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/samyak-shah-5312a31b0"><i className="fa fa-linkedin fa-lg"></i></a></BootstrapTooltip>
                        <BootstrapTooltip TransitionComponent={Zoom} title="Github" arrow placement="bottom-start"><a className="btn btn-social-icon btn-github" href="https://www.github.com/RexTitanium"><i className="fa fa-github fa-lg"></i></a></BootstrapTooltip>
                        <BootstrapTooltip TransitionComponent={Zoom} title="Twitter" arrow placement="bottom-start"><a className="btn btn-social-icon btn-twitter" href="https://www.twitter.com/sumyuck"><i className="fa fa-twitter fa-lg"></i></a></BootstrapTooltip>
                    </div>
                </div>           
               
                <div className="col-7 col-sm-5 codes">
                    <h5>CODES / PACKAGES USED</h5>
                    <ul className="list-unstyled links2">
                        <li>&#60;React JS&#62;</li>
                        <li>&#60;Flickity&#62;</li>
                        <li>&#60;Font-Awesome&#62;</li>
                        <li>&#60;Redux&#62;</li>
                        <li>&#60;Material UI&#62;</li>
                        <li>&#60;Framer-Motion&#62;</li>
                    </ul>
                </div>
                <div className="col col-sm-2 link-nav">
                    <h5>LINKS</h5>
                    <ul className="list-unstyled links">
                        <li><Link to="./home"><strong>Home</strong></Link></li>
                        <li><Link to="./work"><strong>Work</strong></Link></li>
                        <li><Link to="./aboutus"><strong>About</strong></Link></li>
                       {<li><Link to="./contactus"><strong>Contact Us</strong></Link></li>}
                    </ul>
                    
                </div>  
                
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>?? Copyright 2021 Titanium Arts</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;