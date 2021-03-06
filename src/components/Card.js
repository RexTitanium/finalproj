import React from 'react';
import './styles/IndCard.css';
import { Loading } from './Loading';

const Cards = (props) => {
  if (props.isLoading) {
      return(
          <div className="container">
              <div className="row m-4">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (props.cards != null) {
      return (
        <div>
                <CardItem
                    props={props.cards}
                />
            </div>
      );
      }
      else{
        return(
          <div className="error">
            <h1 >Error 404! Not found</h1>
          </div>
        );
      }
}

function CardItem({props}) {
    return (
      <>
        <div className="col-12 col-md-8 col-sm-12 card-container">
          <div className="card-wrapper">
            {props.videof ? 
                <video
                className='cards__item__img2'
                alt='Work Image'
                width="100%" height="100%"  controls loop="loop" 
                >
                  <source src={props.video} type="video/mp4" />
                </video>
                :
                <img
                className="card-image"
                src={props.image}
                alt={props.title}
              />}
          </div>
          <div className="card-info">
            <h1 className="title">NAME:</h1>
            <h2>{props.title}</h2><br />
            <h1 className="description">SOFTWARES USED: </h1>
            <h5 className="description-text">{props.text} </h5><br />
            <div id="wrap">
              <a href={props.link} download={props.title} target='_blank' class="btn-slide2">
                  <span class="circle2"><i class="fa fa-download"></i></span>
                  <span class="title2">Download</span>
                  <span class="title-hover2">Click here</span>
                </a>
</div>
          </div>
          
        </div>
        

      </>
    );
  }
export default Cards;