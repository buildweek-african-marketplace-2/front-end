import React from 'react';
import {BrowserRouter as Route, Link, Router} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';

const HomePage = () => {
    return(
            <div className="Home">
                <div className="Home-Title">
                    <h1>Welcome to Amani Marketplace!</h1>
                    <h2>Amani Marketplace empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.</h2>
                </div>
                <div className="Home-Buttons">
                    <Link to='/login'>Login</Link><br />
                    <Link to='/register'>Register!</Link><br />
                    <Link to='/items'>Shop Now!</Link>
                </div>
            </div>
    )
};

export default HomePage;