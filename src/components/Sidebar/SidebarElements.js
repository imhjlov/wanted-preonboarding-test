import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars, FaRegBell, FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
export const Aside = styled.aside`
  padding: 10px 0;
`;

export const AsideMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 5px;
  }
`;
export const AsideItem = styled.li`
  color: #fff;
  padding: 5px;
  margin: 5px;
  border-radius: 50%;
  &:nth-child(5) {
    display: none;
  }
  &:active {
    border: 1px solid#fff;
    color: #000;
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
  color: #fff;
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
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
  height: 1.5em;
  width: 1.5em;
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
  color: #010606;
  outline: none;
  border: 1px solid #414141;
  cursor: point;
  text-decoration: none;
`;
