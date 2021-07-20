import React from "react";

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
} from "../Sidebar/MobileSidebarElements";
import logoImg from "../../images/logo_wanted_img.jpg";
import { ProfileModalData } from "../../data/ProdileModalData";
const ProfileModal = (handler) => {
  const ProfileModalMenuMap = ProfileModalData.map((item, index) => (
    <MobileAsidebarMenuItem to={item.path} key={index}>
      <MobileAsidebarLink to="/" onClick={handler.handleMobileBtntoggle}>
        {item.title}
        {index === 0 ? <ProfileIcon /> : ""}
      </MobileAsidebarLink>
    </MobileAsidebarMenuItem>
  ));
  return (
    <MobileAsideWrap
      contentsIsOpen={handler.contentsIsOpen}
      contentsIsClose={handler.contentsIsClose}
      mobileMenuOpen={handler.handleMobileMenuOpen}
    >
      <MobileAside>
        <MobileAsideContainer>
          <MobileAsidebarMenuWrap>{ProfileModalMenuMap}</MobileAsidebarMenuWrap>
        </MobileAsideContainer>
      </MobileAside>
    </MobileAsideWrap>
  );
};

export default ProfileModal;
