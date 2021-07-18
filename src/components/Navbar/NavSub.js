import React from "react";

import {
  NavSubBarWrap,
  NavSubBar,
  SubBarMenuWrap,
  SubBarMenuLink,
  SubBarMenuLabel,
  SubBarContainer,
  LinkIcon,
} from "./SubNavbarElements";
import NavSubList from "./NavSubList";
import { NavSubMenuData } from "../../data/NavSubMenuData";

const NavSub = (navSub) => {
  const showNavSubMenu = () => {
    navSub.showNavSub();
  };
  const closeNavSubMenu = () => {
    navSub.closeNavSub();
  };

  const DetailSubMenuSlice = NavSubMenuData.slice(0, 5);
  const LabelSubMenuSlice = NavSubMenuData.slice(6);

  const DetailSubMenuMap = DetailSubMenuSlice.map((item, index) => (
    <SubBarMenuWrap key={index}>
      <SubBarMenuLink to={item.path}>
        <SubBarMenuLabel>
          {item.title}
          <LinkIcon />
        </SubBarMenuLabel>
        <NavSubList item={item} index={index}></NavSubList>
      </SubBarMenuLink>
    </SubBarMenuWrap>
  ));

  const LabelSubMenuMap = LabelSubMenuSlice.map((item, index) => (
    <SubBarMenuLink to={item.path} key={index}>
      <SubBarMenuLabel>
        {item.title}
        <LinkIcon />
      </SubBarMenuLabel>
    </SubBarMenuLink>
  ));

  return (
    <NavSubBarWrap navSub={navSub.navSub}>
      <NavSubBar
        navSub={navSub.navSub}
        onMouseOver={showNavSubMenu}
        onMouseLeave={closeNavSubMenu}
      >
        <SubBarContainer>
          {DetailSubMenuMap}
          <SubBarMenuWrap>{LabelSubMenuMap}</SubBarMenuWrap>
        </SubBarContainer>
      </NavSubBar>
    </NavSubBarWrap>
  );
};

export default NavSub;
