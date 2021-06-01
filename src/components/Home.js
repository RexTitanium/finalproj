import React from 'react';
import { Link } from 'react-router-dom';
import Flickity from 'react-flickity-component';
import { Loading } from './Loading';
import './styles/Home.css';

const flickityOptions = {
    initialIndex: 0,
    autoPlay: 3000,
    contain: true,
    wrapAround: true,
    freeScroll: true,
    adaptiveHeight: true
}
function RenderCard({cards}) {

        return(
            <>
                            
                    <Link to={`/work/${cards.id}/${cards.title}`}>
                        <figure className='cards__item__pic-wrap2' data-category="FEATURED">
                            
                            <img
                                className='cards__item__img2'
                                alt='Work Image'
                                src={cards.image}
                            />
                        </figure>
                    </Link> 
                
            </>
        );
}

function RenderVideo({cards}) {
   

    return(
        <>
                        
                <Link to={`/work/${cards.id}/${cards.title}`}>
                    <div>
                        
                        <video
                            className='cards__item__video'
                             controls loop="loop" 
                             controlsList="nodownload"
                             disablePictureInPicture
                             preload="metadata"
                             poster="/assets/images/placeholder.png"
                        >
                            <source src={cards.video} type="video/mp4" />
                        </video>
                    </div>
                </Link> 
            
        </>
    );
}

const Home = props =>{
    if (props.cardsLoading) {
        return(
            <div className="container">
            <div className="row m-4">            
                <Loading />
            </div>
          </div>
        );
    }
    else if(props.cardsErrMess) {
        return(
            <div className="container">
            <div className="row"> 
                <div className="col-12">
                    <h4>{props.cardsErrMess}</h4>
                </div>
            </div>
        </div>
        );
    }
    else{
        return(
            <div className="container">
                <div className=" list">
                    <ul className="list-unstyled list_featured">
                        <li>
                        <h1 className="featured_header">Featured</h1>
                        </li>
                        <li>
                        <div className='cards__container'>
                        <Flickity
                            className={'carousel' }// default ''
                            elementType={'div'} // default 'div'
                            options={flickityOptions} // takes flickity options {}
                            disableImagesLoaded={false} // default false
                            reloadOnUpdate // default false
                            static // default false
                        >
                            {props.cards.map((cards) => {
                                if(cards.featured){
                                    return(
                                        <div className="flickety-images">
                                        <RenderCard cards={cards}/>
                                        </div>
                                    );
                                }
                            })}
                            
                        </Flickity>
                    </div>
                        </li>
                    </ul>                
                    <div className="row-anim">
                        <ul className="list-unstyled list_featured">
                            <li>
                                <h1 className="featured_header">Animations</h1>
                            </li>
                            <li>
                                <div className="m-4">
                                    {props.cards.map((cards) => {
                                        if(cards.videof){
                                            return(
                                                <div>
                                                    <RenderVideo cards={cards}/>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        
    );

    }
        
}

export default Home;