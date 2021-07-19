import React, { useState } from "react";

import {
  Aside,
  AsideMenu,
  AsideItem,
  AsideButton,
  AsideBtnLink,
  SearchIcon,
  NoticeIcon,
  ProfileIcon,
  MenuIcon,
} from "./SidebarElements";
import MobileSidebar from "./MobileSidebar";
const Sidebar = (handleMobileMenu) => {
  return (
    <>
      <Aside>
        <AsideMenu>
          <AsideItem>
            <AsideButton>
              <SearchIcon />
            </AsideButton>
          </AsideItem>
          <AsideItem>
            <AsideButton>
              <NoticeIcon />
            </AsideButton>
          </AsideItem>
          <AsideItem>
            <AsideButton>
              <ProfileIcon />
            </AsideButton>
          </AsideItem>
          <AsideItem>
            <AsideBtnLink to="/">기업서비스</AsideBtnLink>
          </AsideItem>
          <AsideItem>
            <AsideButton onClick={handleMobileMenu.handleMobileBtntoggle}>
              <MenuIcon />
            </AsideButton>
          </AsideItem>
        </AsideMenu>
        <MobileSidebar
          handleMobileMenuOpen={handleMobileMenu.handleMobileMenuOpen}
          handleMobileBtntoggle={handleMobileMenu.handleMobileBtntoggle}
        ></MobileSidebar>
      </Aside>
    </>
  );
};

export default Sidebar;
