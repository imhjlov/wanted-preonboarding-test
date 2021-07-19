import React, { useState } from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

import Sidebar from "../Sidebar/index";
import NavSub from "./NavSub";

const Navbar = (handleMobileMenu) => {
  const [navSub, setNavSub] = useState(false);

  const showNavSub = () => setNavSub(true);
  const closeNavSub = () => setNavSub(false);

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">wanted</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">홈</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/"
                onMouseOver={showNavSub}
                onMouseLeave={closeNavSub}
              >
                탐색
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">커리어성장</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">직군별 연봉</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">이력서</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">매치업</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">프리랜서</NavLinks>
            </NavItem>
          </NavMenu>
          <NavSub
            navSub={navSub}
            showNavSub={showNavSub}
            closeNavSub={closeNavSub}
          ></NavSub>
        </NavbarContainer>
        <Sidebar
          handleMobileMenuOpen={handleMobileMenu.mobileMenuOpen}
          handleMobileBtntoggle={handleMobileMenu.mobileBtntoggle}
        ></Sidebar>
      </Nav>
    </div>
  );
};

export default Navbar;
