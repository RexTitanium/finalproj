import React, {Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/about.scss';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
AOS.init({
    duration: 500,
    delay:300
  
  });

class About extends Component{
    render() {
        return (
             <div>
                 <div  className="about-us-header">
                    <Link to="/aboutus"><img src="/assets/images/about-us-banner.jpg"/></Link>
                </div>
                 <div className="col-12 col-md-5 aboutme ">
                    <div className="col-12 image-card">
                        <motion.img 
                            initial ={{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition = {{ delay: 0.5, duration: 0.5}}
                        src="../assets/images/Samyak.jpg" className="photo" ></motion.img>
                    </div>
                    <motion.div 
                    initial={{x:'100vw'}}
                    animate={{x:0}}
                    transition ={{ type:'spring', stiffness: 120}} className="col-12 info m-3">
                        <h1 data-aos="fade-in">BRIEF</h1><br />
                        <p data-aos="fade-in">Welcome to Titanium Arts, my personal page for displaying all my digital creatives. I am currently 19 years old and aspiring to be
                            an AI/ML engineer. I took some interest in digital creatives around 7 Years ago and started to learn Photoshop then. In recent times
                            of lockdown, i reignited the interest in Blender and 3d modelling and so far with the combined use of Blender and Photoshop have created 
                            numerous arts. I also started having interest in coding and web development at a very young of 12-13 years. Since then i have started to learn
                            a number of coding languages sucha as Java, C, C++, etc.. This website is one of my beginner works of creating a masterpiece in the near future.</p>
                    </motion.div>
            </div>
            <div className="mystory">
                <h1 data-aos="fade-up">LONG</h1>
                <p data-aos="fade-down">I was born in Ahmedabad on the night of 11th June in 2001 to a middle class family residing in Mumbai. I got the best education one can provide
                    at Cambridge International School and learnt the basis of my virtues, skills, hobbies, and values. My motto from the very start was very clear that
                    is to work hard and achieve all the succcess it is written in my destiny. At a very tender age, I was recognised by my fellow teachers and peers
                    to be a leader and so far I have tried to have that attribute inculcated in me. 
                </p>
                <p data-aos="fade-down">
                    In my school days, I was equally involved in the academics, as well as the extra-curricular activities. I was introduced to HTML in my 4th Grade and since then,
                    I have started to learn HTML, CSS, BOOTSTRAP, JAVASCRIPT and other web-development languages. Currently I believe, I am an Amateur in UI/UX design and can design
                    and create webpage templates. I have learnt django but , due to very little use of it in my day-to-day life, I am not that confident in backend. I have kept my hopes 
                    up. I will start to learn different JS modules like Node, Angular, and React in the coming times and hope to learn and implement them as soon as possible.
                    I also have an interest in games as such and get inspired by them, in making arts and 3d models and also web UI. This lockdown has had a very effective learning in terms
                    of computer programming. I regret not using the time available, in increasing my learning exponential curve. Even though it is not stale, it is not too increasing.
                    But I follow a mantra that "HARDWORK ALWAYS PAYS OFF".
                </p>
                <p data-aos="fade-down">This is my life-story which is not yet fulfilled and there are ' MILES TO GO BEFORE I SLEEP .' </p>
            </div>
             </div>
        );
    }
}

export default About;