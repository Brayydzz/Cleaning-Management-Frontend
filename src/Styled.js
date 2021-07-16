import styled from "styled-components";

// Form component used on Booking.js,
export const Form = styled.form `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const DashContain = styled.div `
    display: grid;
    grid-template-columns: 1fr 3fr;
`

export const DashCard = styled.div `
    padding: 10px;
    height: 550px;
    width: 400px;
    background-color: grey; 
    border:solid black 2px;
`

export const DashCardContain = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const NavUl = styled.ul `
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
    margin: 0;
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