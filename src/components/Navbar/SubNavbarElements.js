import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavSubWrap = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.9);
  opacity: ${({ navSub }) => (navSub ? "100%" : "0")};
  height: ${({ navSub }) => (navSub ? "100%" : "0")};
`;

export const NavSubMenu = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transition-end: 300;
  max-height: 500px;
  opacity: ${({ navSub }) => (navSub ? "100%" : "0")};
  height: ${({ navSub }) => (navSub ? "100%" : "0")};
`;

export const SubMenuLink = styled(Link)`
  display: relative;
  color: #000;
`;

export const SubMenuLabel = styled.h2`
  display: relative;
  color: #000;
`;
