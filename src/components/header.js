import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, PrimaryButton, SecondaryButton, StyledLink, StyledLinkA } from './StyledComponents';
import Logo from '../img/logo-black.png'

export function Header() {

    return (
        <HeaderStyle>

            <nav className="nav">
                <StyledLinkA href="https://build-week-african-marketplace-iii.github.io/user-interface/index.html">Home</StyledLinkA>
                <StyledLinkA href="https://build-week-african-marketplace-iii.github.io/user-interface/about.html">About</StyledLinkA>
                <StyledLink to={'/'}>Listings</StyledLink>
            </nav>
            <div class="marketplace-logo">
               <img src={Logo} alt="African Marketplace Logo" className="logo"/>
                <h1>African Marketplace</h1> 
            </div>
            
            <div>
                <Link to={'/login'}>
                <PrimaryButton>Login</PrimaryButton>
                </Link>

                <Link to={'/signup'}>
                <SecondaryButton>Sign Up</SecondaryButton>
                </Link>
            </div>
            
                
        </HeaderStyle>
    )
};