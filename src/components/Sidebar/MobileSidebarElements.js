import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes, FaUserCircle } from "react-icons/fa";

export const MobileAsideWrap = styled.div`
  display: none;
  position: absolute;
  top: 0;
  width: 192px;
  height: auto;
  margin-top: 50px;
  overflow: hidden;
  background: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
  box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
  border: 1px solid #cdcdcd;
  display: ${({ contentsIsOpen }) =>
    contentsIsOpen === "profile" ? "block" : "none"};
  z-index: ${({ contentsIsOpen }) =>
    contentsIsOpen === "profile" ? "1" : "-999"};

  @media screen and (max-width: 768px) {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    top: 0;
    left: 0;
    margin-top: 0;
    border-radius: 0;
    -webkit-box-shadow: 0 0 0 0 rgb(0 0 0 / 0);
    box-shadow: 0 0 0 0 rgb(0 0 0 / 0);
    border: 0;
    display: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "block" : "none")};
    z-index: ${({ mobileMenuOpen }) => (mobileMenuOpen ? "999" : "-999")};
  }
`;
export const MobileAside = styled.div`
  padding-top: 5px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
export const MobileAsideheader = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    height: 50px;
    width: 100%;
    align-items: center;
    line-height: 50px;
  }
`;
export const MobileAsideLogo = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 24px;
    display: inline-block;
  }
`;

export const AsideLogoImg = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    float: right;
    height: 100%;
    cursor: pointer;
  }
`;

export const CloseIcon = styled(FaTimes)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: #ddd;
    width: 1.5em;
    height: 1.5em;
  }
`;

export const MobileAsideContainer = styled.div`
  color: #444;
  @media screen and (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const MobileAsidebarMenuWrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(13, 35px);
  justify-content: start;
  list-style: none;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(14, 44px);
  }
`;
export const MobileAsidebarMenuItem = styled.li`
  padding: 5px;

  &:nth-child(3) {
    grid-row: span 2;
    margin-top: 10px;
    padding-top: 20px;
    padding-bottom: 0px;
    border-top: 1px solid #eee;
  }
  &:nth-child(8) {
    grid-row: span 2;
    margin-top: 10px;
    padding-top: 20px;
    padding-bottom: 0px;
    border-top: 1px solid #eee;
  }
  &:nth-child(10) {
    grid-row: span 2;
    margin-top: 10px;
    padding-top: 20px;
    padding-bottom: 10px;
    border-top: 1px solid #eee;
  }
  &:nth-child(10) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 768px) {
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
      background-color: #fff;
    }
    &:nth-child(11) {
      color: #eee;
    }
  }
`;
export const MobileAsidebarLink = styled(LinkS)`
  text-decoration: none;
  font-size: 1rem;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  display: block;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #eee;
  }
  @media screen and (max-width: 768px) {
    align-items: left;
    margin-left: 20px;
    font-size: 1.2rem;
  }
`;

export const ProfileIcon = styled(FaUserCircle)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: #ddd;
    width: 2em;
    height: 2em;
    position: absolute;
    right: 0;
    margin-right: 20px;
  }
`;
