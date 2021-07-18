import React from "react";
import {
  MobileAside,
  MobileAsideLogo,
  MobileAsidebarMenu,
  MobileAsideWrapper,
  MobileAsidebarLink,
  Icon,
  CloseIcon,
} from "./MobileSidebarElements";
const MobileSidebar = ({ isOpen, toggle }) => {
  return (
    <div>
      <MobileAside isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <MobileAsideWrapper>
          <MobileAsidebarMenu>
            <MobileAsidebarLink to="">wanted</MobileAsidebarLink>
            <br></br>
            <MobileAsidebarLink to="">로그인</MobileAsidebarLink>
            <MobileAsidebarLink to="">이력서</MobileAsidebarLink>
            <MobileAsidebarLink to="">매치업</MobileAsidebarLink>

            <MobileAsidebarLink to="">프리랜서</MobileAsidebarLink>
            <MobileAsidebarLink to="">직군별 연봉</MobileAsidebarLink>
            <MobileAsidebarLink to="">커리어 성장</MobileAsidebarLink>
            <MobileAsidebarLink to="">기업 서비스</MobileAsidebarLink>
          </MobileAsidebarMenu>
        </MobileAsideWrapper>
      </MobileAside>
    </div>
  );
};

export default MobileSidebar;
