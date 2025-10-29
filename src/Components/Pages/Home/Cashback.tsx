import React from 'react';
import "../../../assets/custom.css";

const Cashback = () => {
    return (
        <div>
            <div className='mt-4 bg-red-200 p-12'>
                <h1 className='merriweather-regular'>Get 5% Cash back</h1>
                <button className="btn bg-green-800 hover:bg-green-900 text-white mt-4">Learn More</button>
            </div>
            <div className='place-items-center'>
                <hr className='mt-2 mb-2 w-3/4  border-gray-400' />
            </div>

        </div>

    );
};

export default Cashback;