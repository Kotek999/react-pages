import React from 'react';
import CarsWeb from '../Cars/Cars';
import { homeObjOne } from '../Cars/DataCars';

function Home() {
    return (
        <>
            <CarsWeb {...homeObjOne} />
        </>
    )
}   

export default Home;