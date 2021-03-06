import React, { useState } from "react";
import {
  MobileAsideLogo,
  MobileAsideWrap,
  MobileAsideheader,
  MobileAside,
  MobileAsidebarMenuWrap,
  MobileAsidebarMenuItem,
  MobileAsideContainer,
  MobileAsidebarLink,
  Icon,
  AsideLogoImg,
  CloseIcon,
  ProfileIcon,
} from "./MobileSidebarElements";
import logoImg from "../../images/logo_wanted_img.jpg";
import { MobileSidebarData } from "../../data/MobileSidebarData";

const MobileSidebar = (handleMobileMenu) => {
  const MobileAsidebarMenuMap = MobileSidebarData.map((item, index) => (
    <MobileAsidebarMenuItem to={item.path} key={index}>
      <MobileAsidebarLink
        to="/"
        onClick={handleMobileMenu.handleMobileBtntoggle}
      >
        {item.title}
        {index === 0 ? <ProfileIcon /> : ""}
      </MobileAsidebarLink>
    </MobileAsidebarMenuItem>
  ));

  return (
    <MobileAsideWrap mobileMenuOpen={handleMobileMenu.handleMobileMenuOpen}>
      <MobileAside>
        <MobileAsideheader>
          <MobileAsideLogo>
            <AsideLogoImg onClick={handleMobileMenu.handleMobileBtntoggle}>
              <img src={logoImg} alt="로고" />
            </AsideLogoImg>
          </MobileAsideLogo>

          <Icon onClick={handleMobileMenu.handleMobileBtntoggle}>
            <CloseIcon />
          </Icon>
        </MobileAsideheader>

        <MobileAsideContainer>
          <MobileAsidebarMenuWrap>
            {MobileAsidebarMenuMap}
          </MobileAsidebarMenuWrap>
        </MobileAsideContainer>
      </MobileAside>
    </MobileAsideWrap>
  );
};

export default MobileSidebar;
