import styled from "styled-components";
import { Link } from "react-router-dom";

const primaryLight = "#86BBD8"  
const primaryColor = "#336699"

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
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BookingForm = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh; 
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

export const AboutContain = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export const AboutImg = styled.img `
    width: 300px;
    height: 300px;
    border-radius: 50%;
`

export const AboutContent = styled.div `
    display: flex;
    width: 30%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ServiceImg = styled.img `
    width: 200px;
    height: 200px;
`

export const BookingImg = styled.img `
    width: 400px;
    height: 300px;
    border-radius: 50px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
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

export const Foot = styled.footer `
    border-top: black;
    margin-top: 15px;
    background-color: ${primaryColor};
    color: ${primaryLight};

`

export const FooterLink = styled(Link) `
    text-decoration: none;
`

export const InputText = styled.input `
    width: 100%; 
    padding: 12px;  
    border: 1px solid #ccc; 
    border-radius: 4px; 
    box-sizing: border-box; 
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical ;
`

export const TextArea = styled.textarea `
    width: 100%; 
    padding: 12px;  
    border: 1px solid #ccc; 
    border-radius: 4px; 
    box-sizing: border-box; 
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical; 
`
export const Select = styled.select `
    width: 100%; 
    padding: 12px;  
    border: 1px solid #ccc; 
    border-radius: 4px; 
    box-sizing: border-box; 
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical; 

`