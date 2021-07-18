import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Aside,
  AsideMenu,
  AsideItem,
  AsideLink,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">wanted</NavLogo>
          <MobileIcon>
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
          <Aside>
            <AsideMenu>
              <AsideItem>
                <AsideLink>
                  <FaSearch />
                </AsideLink>
              </AsideItem>
              <AsideItem>
                <AsideLink to="">회원가입/로그인</AsideLink>
              </AsideItem>
              <AsideItem>
                <AsideLink> | </AsideLink>
              </AsideItem>
              <AsideItem>
                <NavBtnLink to="">기업서비스</NavBtnLink>
              </AsideItem>
            </AsideMenu>
          </Aside>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
