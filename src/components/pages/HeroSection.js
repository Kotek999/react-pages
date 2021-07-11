import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HomeSection({
    lightBg, 
    topline, 
    lightText, 
    lightTextDesc, 
    headline, 
    description, 
    buttonLabel, 
    img, 
    img_two,
    alt_two,
    img_three,
    alt_three,
    img_four,
    alt_four,
    alt, 
    imgStart
}) {
    return (
    <>
    <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
        > 
        <div className="container">
           <div className="row home__hero-row"
           style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
           >
            <div className="home-line">
                </div>
               <div className="col">
                <div className="home__hero-text-wrapper">
                    <div className="top-line">{topline} </div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}> {headline} </h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                {description}
                            </p>
                            <Link to="/Cars">
                                <Button buttonSize='btn--wide' buttonColor='blue'> 
                                    {buttonLabel}
                                </Button>
                            </Link>  
                        </div>
                        <div className="col">
                        <div className="row home__hero-row">
                                <img src={img} alt={alt} className="home-hero-img"/>
                                </div>
                            </div>
                        <div className="col">
                        <div className="row home__hero-row">
                            <img src={img_two} alt={alt_two} className="home-hero-img-two"/>
                                </div>
                            </div>
                        <div className="col">
                        <div className="row home__hero-row">
                            <img src={img_three} alt={alt_three} className="home-hero-img-three"/>
                                </div>
                            </div>
                            <div className="col">
                            <div className="row home__hero-row">
                            <img src={img_four} alt={alt_four} className="home-hero-img-four"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    );
}

export default HomeSection;