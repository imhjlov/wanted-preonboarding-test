import React from "react";
import {
  MobileAside,
  MobileAsidebarMenu,
  MobileAsideWrapper,
  MobileAsidebarLink,
  Icon,
  CloseIcon,
} from "./MobileSidebarElements";
const MobileSidebar = (handleMobileMenu) => {
  return (
    <div>
          <CloseIcon />
        </Icon>
        <MobileAsideWrapper>
          <MobileAsidebarMenu>
              wanted
            </MobileAsidebarLink>
            <br></br>
              로그인
            </MobileAsidebarLink>
              이력서
            </MobileAsidebarLink>
              매치업
            </MobileAsidebarLink>
    <MobileAsideWrap mobileMenuOpen={handleMobileMenu.handleMobileMenuOpen}>
          <Icon onClick={handleMobileMenu.handleMobileBtntoggle}>

              프리랜서
            </MobileAsidebarLink>
              직군별 연봉
            </MobileAsidebarLink>
              커리어 성장
            </MobileAsidebarLink>
              기업 서비스
            </MobileAsidebarLink>
          </MobileAsidebarMenu>
        </MobileAsideWrapper>
      </MobileAside>
    </div>
  );
};

export default MobileSidebar;
