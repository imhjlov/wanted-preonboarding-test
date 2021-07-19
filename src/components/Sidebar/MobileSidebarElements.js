import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes, FaUserCircle } from "react-icons/fa";

export const MobileAsideWrap = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    top: 0;
    left: 0;
    display: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "block" : "none")};
    z-index: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "999" : "-999")};
  }
`;
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

export const AsideLogoImg = styled.div`
  cursor: pointer;
`;

export const Icon = styled.div`
  float: right;
  height: 100%;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: #ddd;
  width: 1.5em;
  height: 1.5em;
`;

export const MobileAsideContainer = styled.div`
  margin-top: 100px;
  color: #444;
`;

export const MobileAsidebarMenuWrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(14, 44px);
  justify-content: start;
  list-style: none;
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
    color: #ddd;
  }
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

export const ProfileIcon = styled(FaUserCircle)`
  color: #ddd;
  width: 2em;
  height: 2em;
  position: absolute;
  right: 0;
  margin-right: 20px;
`;
