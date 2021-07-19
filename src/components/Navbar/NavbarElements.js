import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: contents;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
  width: 100%;
  max-width: 1060px;
`;

export const NavLogo = styled(LinkR)`
  color: #333;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-left: 0px;
  font-weight: bold;
  text-decoration: none;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
  height: 100%;
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 0;
  }
`;

export const NavItem = styled.li`
  color: #333;
  height: 100%;
  &:first-child {
    display: none;
  }
  @media screen and (max-width: 768px) {
    &:first-child {
      display: block;
    }
    &:nth-child(n + 4) {
      display: none;
    }
  }
`;

export const NavLinks = styled(LinkS)`
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #36f;
  }
`;
