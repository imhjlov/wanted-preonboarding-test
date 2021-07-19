import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars, FaRegBell, FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

export const Aside = styled.aside`
  height: 100%;
`;

export const AsideMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  height: 100%;
  align-items: center;
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 5px;
  }
`;
export const AsideItem = styled.li`
  padding: 6px 3px;
  border-radius: 50%;
  margin-left: 3px;
  -webkit-transition: 0.2s;
  transition: 0.2s;

  &:nth-child(2) {
    background-color: ${({ contentsIsOpen, contentsIsClose }) =>
      contentsIsOpen === "notice"
        ? "#36f"
        : contentsIsClose === "notice"
        ? "#fff"
        : ""};
  }

  &:nth-child(3) {
    padding: 0;
    border: ${({ contentsIsOpen, contentsIsClose }) =>
      contentsIsOpen === "profile"
        ? "1px solid #36f"
        : contentsIsClose === "profile"
        ? "1px solid #fff"
        : ""};
  }

  &:nth-child(5) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    &:nth-child(n + 3):nth-child(-n + 4) {
      display: none;
    }
    &:nth-child(5) {
      display: block;
    }
  }
`;

export const AsideButton = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  padding: 0 5px;
`;

export const SearchIcon = styled(BiSearch)`
  height: 1.7em;
  width: 1.7em;
`;
export const NoticeIcon = styled(FaRegBell)`
  height: 1.5em;
  width: 1.5em;
`;
export const ProfileIcon = styled(FaUserCircle)`
  height: 2.6em;
  width: 2em;
`;
export const MenuIcon = styled(FaBars)`
  height: 1.5em;
  width: 1.5em;
`;

export const AsideBtnLink = styled(LinkR)`
  display: block;

  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 5px 10px;
  color: #666;
  outline: none;
  border: 1px solid #e1e2e3;
  cursor: point;
  text-decoration: none;
`;
