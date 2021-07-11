import React from "react";
import './Cars.css';

function Cars ({
    img_one, 
    img_two,
    img_three,
    alt
}) {

    function chooseCar(a) {
        a.target.style.background = 'gray';
        a.target.style.border = '1px solid #000000';
        a.target.style.marginBottom = '2vh';
        a.target.style.cursor = 'pointer';
    }

    function resetCar(x) {
        x.target.style.background = '';
        x.target.style.marginBottom = '';
        x.target.style.transition = 'all 0.3s ease-out';
    }
    return (
    <>
    <div className="header-one">
        <div className="header-line">
            <h1 className="title-one"> Car Service </h1>
            <p>
            You have any choice to chosen your dream car for free way. 
            Think about this service and choose car, which giving enough emotions.
            Those cars was making for clients who's wanted a little bit dangerous drive.
            </p>
        </div>
        
<h1 className="title-two"> Choose your the best Car: </h1>
    <div onMouseOut={resetCar} className="Cars">
        <div className="car">
            <img onMouseOver={chooseCar} src={img_one} alt={alt} className="car-one-img"/>
        </div>
        <div className="car">
            <img onMouseOver={chooseCar} src={img_two} alt={alt} className="car-one-img"/>
        </div>
        <div className="car">
            <img onMouseOver={chooseCar} src={img_three} alt={alt} className="car-one-img"/>
        </div>
    </div>
</div>
</>
  );
}

export default Cars;

