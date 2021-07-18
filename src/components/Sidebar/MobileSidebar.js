import React from "react";
import {
  MobileAside,
  MobileAsidebarMenu,
  MobileAsideWrapper,
  MobileAsidebarLink,
  Icon,
  CloseIcon,
} from "./MobileSidebarElements";
const MobileSidebar = ({ isOpen, toggle }) => {
  return (
    <div>
      <MobileAside isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <MobileAsideWrapper>
          <MobileAsidebarMenu>
            <MobileAsidebarLink to="/" onClick={toggle}>
              wanted
            </MobileAsidebarLink>
            <br></br>
            <MobileAsidebarLink to="/" onClick={toggle}>
              로그인
            </MobileAsidebarLink>
            <MobileAsidebarLink to="#" onClick={toggle}>
              이력서
            </MobileAsidebarLink>
            <MobileAsidebarLink to="#" onClick={toggle}>
              매치업
            </MobileAsidebarLink>

            <MobileAsidebarLink to="#" onClick={toggle}>
              프리랜서
            </MobileAsidebarLink>
            <MobileAsidebarLink to="#" onClick={toggle}>
              직군별 연봉
            </MobileAsidebarLink>
            <MobileAsidebarLink to="#" onClick={toggle}>
              커리어 성장
            </MobileAsidebarLink>
            <MobileAsidebarLink to="#" onClick={toggle}>
              기업 서비스
            </MobileAsidebarLink>
          </MobileAsidebarMenu>
        </MobileAsideWrapper>
      </MobileAside>
    </div>
  );
};

export default MobileSidebar;
