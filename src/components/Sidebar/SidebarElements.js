import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Aside = styled.aside``;

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

export const AsideLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8rem;
  height: 100%;
  cursor: pointer;
`;

export const FaSearch = styled.li``;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AsideBtnLink = styled(LinkR)`
  display: flex;
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
