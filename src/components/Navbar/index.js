import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

import Sidebar from "../Sidebar/index";

const Navbar = ({ toggle }) => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">wanted</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="">탐색</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">커리어성장</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">직군별 연봉</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">이력서</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">매치업</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">프리랜서</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">Ai 합격예측</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
        <Sidebar></Sidebar>
      </Nav>
    </div>
  );
};

export default Navbar;
