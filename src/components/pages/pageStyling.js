import styled from "styled-components";
import { Link } from "react-router-dom";

const primaryLight = "#86BBD8"  
const primaryColor = "#336699"
const secondaryColor = "#DC602E"
const primaryText = "black"
const secondaryText = "white" 
const cardColor = "#EFF8FB"

export const HeroText = styled.div `
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`

export const ServiceContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`

export const HomeArticle = styled.article `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AboutCardContain = styled.div `
    width: 90%;
    margin-bottom: 10px;
    background-color: ${primaryLight} ;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 300px;
    border: solid ${primaryLight} 0.5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export const ServiceImg = styled.img `
    width: 200px;
    height: 200px;
`

export const PageP = styled.p `
    margin: 5px;
    margin-bottom: 10px;
    padding-left: 5px;
`

export const ServiceCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    height: 400px;
    width: 400px;
    background-color: ${primaryLight}; 
    border:solid black 1px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

`

export const Footer = styled.footer `
    border-top: black;
    background-color: ${primaryColor};
    color: ${primaryLight};

`

export const FooterLink = styled(Link) `
    text-decoration: none;
`