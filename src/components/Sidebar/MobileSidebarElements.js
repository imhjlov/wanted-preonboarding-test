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
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const MobileAsideWrapper = styled.div`
  color: #fff;
`;

export const MobileAsidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 70px);
  justify-content: start;
`;

export const MobileAsidebarLink = styled(LinkS)`
  display: flex;
  align-items: left;
  margin-left: 20px;
  margin-top: 50px;
  font-size: 1.3rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;

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
`;