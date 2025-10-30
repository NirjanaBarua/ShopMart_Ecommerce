import React from 'react';
import "../../../assets/custom.css";
import { Slide } from 'react-awesome-reveal';

const Cashback = () => {
    return (
        <div>
            <Slide direction='down'>
                <div className='mt-4 bg-red-200 p-12'>
                <h1 className='merriweather-regular'>Get 5% Cash back</h1>
                <button className="btn bg-green-800 hover:bg-green-900 text-white mt-4">Learn More</button>
            </div>
            </Slide>
            
            

        </div>

    );
};

export default Cashback;