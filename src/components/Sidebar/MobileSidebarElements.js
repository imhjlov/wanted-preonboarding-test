import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const MobileAsideLogo = styled.div``;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  margin-top: 30px;
`;
export const MobileAside = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    top: 0;
    left: 0;
    height: 0;
    opacity: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "100%" : "0")};
    height: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "100%" : "0")};
    z-index: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "999" : "-999")};
  }
`;
<<<<<<< HEAD
export const MobileAside = styled.div`
  padding: 20px;
`;
export const MobileAsideheader = styled.div`
  height: 50px;
  width: 100%;
  align-items: center;
  line-height: 50px;
`;
export const MobileAsideLogo = styled.div`
  width: 60px;
  height: 24px;
  display: inline-block;
`;

export const LogoImg = styled.image``;

export const Icon = styled.div`
  float: right;
  height: 100%;
`;
export const CloseIcon = styled(FaTimes)`
  color: #ddd;
  width: 1.5em;
  height: 1.5em;
`;
=======
>>>>>>> parent of 462af18 (💄Design: 변경 html, css 구조)

export const MobileAsideWrapper = styled.div`
  color: #fff;
`;

export const MobileAsidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(14, 44px);
  justify-content: start;
<<<<<<< HEAD
  list-style: none;
  margin-top: 50px;
  align-items: center;
`;
export const MobileAsidebarMenuItem = styled.li`
  &:nth-child(3) {
    grid-row: span 2;
    margin-top: 15px;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }
  &:nth-child(8) {
    grid-row: span 2;
    margin-top: 15px;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }
  &:nth-child(10) {
    grid-row: span 2;
    margin-top: 15px;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }
  &:nth-child(11) {
    color: #eee;
  }
=======
>>>>>>> parent of 462af18 (💄Design: 변경 html, css 구조)
`;
export const MobileAsidebarLink = styled(LinkS)`
  align-items: left;
  margin-left: 20px;
  font-size: 1.2rem;
  text-decoration: none;

  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
`;

<<<<<<< HEAD
export const ProfileIcon = styled(FaUserCircle)`
  color: #ddd;
  width: 2em;
  height: 2em;
  position: absolute;
  right: 0;
  margin-right: 20px;
=======
  &:nth-child(3) {
    border-bottom: 1px solid #fff;
    padding-bottom: 45px;
  }
  &:nth-child(6) {
    border-bottom: 1px solid #fff;
    padding-bottom: 45px;
  }
  &:nth-child(8) {
    border-bottom: 1px solid #fff;
    padding-bottom: 45px;
  }
>>>>>>> parent of 462af18 (💄Design: 변경 html, css 구조)
`;
