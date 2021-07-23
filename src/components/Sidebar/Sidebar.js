import React from "react"
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarRoute, SidebarLink } from "./SidebarStyle"

const Sidebar = ({toggleNav, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={() => toggleNav()}>
            <Icon onClick={toggleNav}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggleNav}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/about" onClick={toggleNav}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/services" onClick={toggleNav}>
                        Services
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/bookings" onClick={toggleNav}>Book Now!</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
