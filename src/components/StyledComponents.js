import styled from 'styled-components';
import { defaultTheme, typeScale, primaryFont, neutral, black } from '../utils';
import { Link } from 'react-router-dom';
import Radium from 'radium';

const RadiumNavLink = Radium(Link);

const Button = styled.button `
    box-sizing: border-box;
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 150px;
    max-width: 200px;
    min-height: 50px;
    max-height: 100px;
    cursor: pointer;
    font-family: ${primaryFont};
    transition: background-color 0.2s linear, color 0.2s linear;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0px 24px;
    outline: none;
`

export const PrimaryButton = styled(Button) `
    background-color: ${defaultTheme.primaryButtonColor};
    color: ${defaultTheme.secondaryFontColor};
    border: 2px solid ${defaultTheme.primaryButtonColor};
    &:hover {
        background: ${defaultTheme.primaryColorButtonHover};
        border: 2px solid ${defaultTheme.primaryButtonColor};
        color: ${defaultTheme.primaryFontColorHover};
    }
`

export const SecondaryButton = styled(Button) `
    background-color: ${defaultTheme.secondaryButtonColor};
    color: ${defaultTheme.secondaryFontColor};
    border: 2px solid ${defaultTheme.secondaryButtonColor};
    &:hover {
        background: ${defaultTheme.secondaryButtonColorHover};
        border: 2px solid ${defaultTheme.secondaryButtonBorderHover};
        color: ${defaultTheme.secondaryFontColorHover};
    }
`
export const SmallButton = styled(PrimaryButton) `
    height: 50px;
    width: 100px;
    font-size: ${typeScale.paragraph};
`

export const Form = styled.form `
    width: 400px;
    height: 500px;
    background: rgba(251, 175, 0, 0.76);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: ${primaryFont};
    color: ${defaultTheme.primaryFontColor};
    margin: 100px 0 0 500px;
    opacity: 90%;
`
export const Input = styled.input `
    border: none;
    border-bottom: 2px solid ${neutral};
    max-width: 400px;
    min-width: 300px;
    padding: 25px;
    font-family: ${primaryFont};
    outline: none;
    background: ${neutral};
    ::placeholder {
        font-size: ${typeScale.paragraph};
        color: ${defaultTheme.tertiaryColor};
    }
`
export const ItemDiv = styled.div `
    background-color: ${defaultTheme.primaryColor};
    opacity: .95;
    width: 10%;
    height: 10%;
    padding: 40px;
    border-radius: 2px;
    font-family: ${primaryFont};
    color: ${black}
    display: flex;
    align-items: center;
`
export const ItemCardStyle = styled.div `
    background-color: ${neutral};
    border-radius: 2px;
    text-align: center;
    font-family: ${primaryFont};
    color: ${defaultTheme.tertiaryColor};
    h3 {
        padding: 10px;
        text-align: center;
    }
    p {  
    padding: 10px;
    }
    img{
        height: 100px;
        width: 100px;
    }
`

export const HeaderStyle = styled.header `
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 30px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: ${primaryFont};
    letter-spacing: .25;
    position: top;
    color: ${black};
    
    h1 {
        font-size: ${typeScale.header1};
    }
    nav {
        display: flex;
        background: ${neutral};
        opacity: .76;
        height: 50px;
    }
    .marketplace-logo {
        display: flex;
    }
`
export const StyledLink = styled(RadiumNavLink)`
    text-decoration: none;
    display: flex;
    padding: 0px 12px;
    display: flex;
    align-items: center;
    color: ${black};
    :hover {
        color: ${defaultTheme.tertiaryColor};
    }
`

export const StyledLinkA = styled.a`
    text-decoration: none;
    display: flex;
    padding: 0px 12px;
    display: flex;
    align-items: center;
    color: ${black};
    :hover {
        color: ${defaultTheme.tertiaryColor};
    }
`

export const FooterStyle = styled.footer `
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: ${primaryFont};
    font-size: ${typeScale.copyrightText};
    color: ${neutral};
    background: ${black};
    opacity: 0.76;
    width: 100vw;
    height: 90px;
`

export const Select = styled.select`
  max-width: 400px;
  min-width: 300px;
  height:35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border:none;
  margin-left: 10px;
  font-family: ${primaryFont};
  color: ${defaultTheme.tertiaryColor};
       option {
        color: ${defaultTheme.tertiaryColor};
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
`
