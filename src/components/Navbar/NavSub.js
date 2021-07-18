import React from "react";
import { Link } from "react-router-dom";

import {
  NavSubMenu,
  NavSubWrap,
  SubMenuLink,
  SubMenuLabel,
} from "./SubNavbarElements";
import { NavSubMenuData } from "../../data/NavSubMenuData";
const NavSub = (navSub) => {
  const showNavSubMenu = () => {
    navSub.showNavSub();
    console.log("마우스올림", navSub.navSub);
  };
  const closeNavSubMenu = () => {
    navSub.closeNavSub();
    console.log("마우스내림", navSub.navSub);
  };
  console.log(navSub.navSub);
  return (
    <NavSubWrap navSub={navSub.navSub}>
      <NavSubMenu
        navSub={navSub.navSub}
        onMouseOver={showNavSubMenu}
        onMouseLeave={closeNavSubMenu}
      >
        {NavSubMenuData.map((item, index) => {
          <SubMenuLink to={item.path} key={index}>
            <SubMenuLabel>{item.title}</SubMenuLabel>
          </SubMenuLink>;
        })}
      </NavSubMenu>
    </NavSubWrap>
  );
};

export default NavSub;
