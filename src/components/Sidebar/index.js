import React from "react";
import { FaSearch } from "react-icons/fa";
import {
  Aside,
  AsideMenu,
  AsideItem,
  AsideLink,
  AsideBtnLink,
} from "./SidebarElements";
import MobileSidebar from "./MobileSidebar";
const Sidebar = (handleMobileMenu) => {
  return (
    <div>
      <Aside>
        <AsideMenu>
          <AsideItem>
            <AsideLink>
              <FaSearch />
            </AsideLink>
          </AsideItem>
          <AsideItem>
            <AsideLink to="/">회원가입/로그인</AsideLink>
          </AsideItem>
          <AsideItem>
            <AsideLink> | </AsideLink>
          </AsideItem>
          <AsideItem>
            <AsideBtnLink to="/">기업서비스</AsideBtnLink>
          </AsideItem>
        </AsideMenu>
        <MobileSidebar
          handleMobileMenuOpen={handleMobileMenu.handleMobileMenuOpen}
          handleMobileBtntoggle={handleMobileMenu.handleMobileBtntoggle}
        ></MobileSidebar>
      </Aside>
    </div>
  );
};

export default Sidebar;
