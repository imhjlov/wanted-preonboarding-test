import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const NavSubBarWrap = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 100%;
  height: 100%;

  opacity: ${({ navSub }) => (navSub ? "100%" : "0")};
  height: ${({ navSub }) => (navSub ? "100%" : "0")};
`;

export const NavSubBar = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transition-end: 300;
  max-height: 450px;
  opacity: 100%;
  height: 100%;
  opacity: ${({ navSub }) => (navSub ? "100%" : "0")};
  height: ${({ navSub }) => (navSub ? "100%" : "0")};
`;

export const SubBarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SubBarMenuWrap = styled.div`
  float: left;
  width: 16.6%;
  height: 250px;
  padding: 40px 20px 0 0;
  text-align: left;
  display: block;
`;

export const SubBarMenuLink = styled(Link)`
  color: #000;
  text-decoration: none;
  display: block;
  cursor: pointer;
`;

export const SubBarMenuLabel = styled.h2`
  position: relative;
  color: #444;
  font-size: 1.2rem;
  line-height: 20px;
  vertical-align: top;
  padding-right: 20px;
  padding-bottom: 15px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const LinkIcon = styled(FaChevronRight)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.8rem;
  color: #999;
`;
