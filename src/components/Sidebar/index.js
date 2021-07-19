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
  const [contentsIsOpen, setContentsIsOpen] = useState(" ");
  const [contentsIsClose, setContentsIsClose] = useState(" ");

  const asideBtntoggle = (clickedBtn) => {
    if (clickedBtn === contentsIsOpen) {
      setContentsIsClose(clickedBtn);
      setContentsIsOpen(" ");
      return;
    } else {
      setContentsIsClose(contentsIsOpen);
      setContentsIsOpen(clickedBtn);
    }
  };

  return (
    <>
      <Aside>
        <AsideMenu>
          <AsideItem
            data-msg={"serch"}
            onClick={asideBtntoggle.bind(null, "serch")}
            contentsIsOpen={contentsIsOpen}
            contentsIsClose={contentsIsClose}
          >
            <AsideButton>
              <SearchIcon />
            </AsideButton>
          </AsideItem>
          <AsideItem
            data-msg={"notice"}
            onClick={asideBtntoggle.bind(null, "notice")}
            contentsIsClose={contentsIsClose}
            contentsIsOpen={contentsIsOpen}
          >
            <AsideButton>
              <NoticeIcon />
            </AsideButton>
          </AsideItem>
          <AsideItem
            className="profile"
            data-msg={"profile"}
            onClick={asideBtntoggle.bind(null, "profile")}
            contentsIsClose={contentsIsClose}
            contentsIsOpen={contentsIsOpen}
          >
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
