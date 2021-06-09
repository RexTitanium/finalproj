import React from 'react';
import {Loading} from './Loading'
import { Link } from 'react-router-dom';
import './styles/Card.css';
//import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './styles/work.css'
import {motion} from 'framer-motion'



function RenderCardItem({ cards}) {  

  const stopMovie = (e) => {
    e.target.pause();
    console.log('off');
  };
  
  const playMovie = (e) => {
    e.target.play();
    console.log('on');
  }

    return (
      <motion.li className='cards__item'
      initial={{x:'-100vw'}}
      animate={{x:0}}
      transition ={{ type:'spring', stiffness: 120}}
      >
        <Link className='cards__item__link' to={`/work/${cards.id}/${cards.title}`}>
          <figure className='cards__item__pic-wrap'>
          {cards.videof ? 
                <video
                onMouseOver={playMovie}
                onMouseOut={stopMovie}
                className='cards__item__img'
                alt='Work Image'
                width="100%" height="100%" muted loop="loop" 
                loading="lazy"
                >
                  <source src={cards.video} type="video/mp4" />
                </video>
                :
                <img
                className="cards__item__img"
                src={cards.image}
                alt={cards.title}
                loading="lazy"
              />}
            
          </figure>
          <div className='cards__item__heading'>
            <h5 className='cards__item__title'><strong>{cards.title}</strong></h5>
          </div>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>Softwares Used: {cards.text}</h5>
          </div>
        </Link>
      </motion.li> 
    );
}
  const Work = props => {
    const menu = props.cards.map(cards => {
      return (
        <div className="col-sm-9 col-md-5" key={cards.id}>

                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                             <RenderCardItem cards={cards} isLoading={props.cardsLoading} errMess={props.cardsErrMess}/>
                        </ul>
                    </div>
                </div>
        </div>
      );
    });
    if (props.cardsLoading) {
      return(
        <div className="container">
          <div className="row m-4">            
              <Loading />
          </div>
        </div>
  
      );
  }
  else if (props.cardsErrMess) {
      return(
        <div className="container ">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.cardsErrMess}</h4>
                        </div>
                    </div>
                </div>
      );
  }
  else{

    return (
      <div className="container">
        <div className="row justify-content-center">
          {/*<Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Work</BreadcrumbItem>
          </Breadcrumb>*/}
          <div className="col-12 col-md-5 work_header">
            <h3>WORK</h3>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center"
          
        >
          {menu}
        </div>
        
      </div>
    );
  }
  }

export default Work;