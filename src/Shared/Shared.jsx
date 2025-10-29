import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
const Shared = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Shared;