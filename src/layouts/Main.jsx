import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer.jsx';
import Header from '../shared/header.jsx';
import './Main.scss';

const Main = (props) => {

    const isLoginOrDashboard = window.location.pathname.includes('/login') || window.location.pathname.includes('/register') || window.location.pathname.includes('/dashboard');
    // const isLoginOrDashboard = window.location.pathname.includes('/login' || '/register' || '/dashboard');

    return(
        <div className="main_container" id="wrapper">
            {!isLoginOrDashboard && <Header />}
            <Outlet />
            {!isLoginOrDashboard && <Footer />}
        </div>
    )
    
};

export default Main;