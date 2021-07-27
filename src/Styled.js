import styled from "styled-components";
import { Link } from "react-router-dom";

const primaryLight = "#86BBD8"  
const primaryColor = "#336699"
const secondaryColor = "#DC602E"
const primaryText = "black"
const secondaryText = "white" 
const cardColor = "#EFF8FB"

// Form component used on Booking.js,
export const Form = styled.form `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CarouselDiv = styled.div `
    height: 200px;
    width: 200px;

`

export const NewNote = styled.div `
    border:solid black 2px;
    height: 100%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NoteCard = styled.div `
    border: solid black 2px;
    height: 100%;
    min-height: 200px;
    width: 100%;
    max-width: 500px;
    min-width: 350px;
    margin-bottom: 10px;
    background-color: ${cardColor};
`

export const Button = styled.button `
    border-radius: 50px;
    background: ${primaryColor};
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    margin: 5px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${primaryLight};
        color: ${secondaryColor};
    }
`


export const DashContain = styled.div `
    display: grid;
    grid-template-columns: 1fr 3fr;
`

export const DashCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    height: 300px;
    width: 300px;
    background-color: ${cardColor}; 
    border:solid black 1px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

`

export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const EmployeeTitle = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DashCardContain = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const DashButton = styled.button `
    background-color: inherit;
    border: none;
    cursor: pointer;
`

export const Nav = styled.nav `
    background: ${primaryColor};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 767px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const NavItem = styled.li `
    height: 80px;
`

export const NavLinks = styled(Link)`
    color: ${primaryLight};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        border-bottom: 3px solid ${primaryLight};
    }
`

export const NavLogo = styled(Link)`
    color: ${primaryLight};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;

    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: ${primaryLight};
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: ${secondaryColor};
    }
`
export const PageButton = styled(Link) `
    border-radius: 50px;
    background: ${primaryColor};
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    margin: 5px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${primaryLight};
        color: ${secondaryColor};
    }
`