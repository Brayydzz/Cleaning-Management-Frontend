import styled from "styled-components";
import { Link } from "react-router-dom";

// Form component used on Booking.js,
export const Form = styled.form `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NewNote = styled.div `
    border:solid black 2px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NoteCard = styled.div `
    border: solid black 2px;
    height: 200px;
    width: 100%;
    background-color: grey;
`


export const DashContain = styled.div `
    display: grid;
    grid-template-columns: 1fr 3fr;
`

export const DashCard = styled.div `
    text-align: center;
    padding: 10px;
    height: 300px;
    width: 300px;
    background-color: grey; 
    border:solid black 2px;
`

export const DashCardContain = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const Nav = styled.nav `
    background: #000;
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

    @media screen and (max-width: 768px) {
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

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li `
    height: 80px;
`

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const NavLogo = styled(Link)`
    color: red;
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

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: red;
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
        color: blue;
    }
`

export const DashLi = styled.li `
    cursor: pointer;
`

export const DashNavUl = styled.nav `
    display: flex;
    height: 300px;
    width: 200px;
    background-color: grey;
    flex-direction: column;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
    margin: 0;
`