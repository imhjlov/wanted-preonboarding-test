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
  height: 50px;
  min-width: 300px;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const AsideItem = styled.li`
  color: #fff;
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
