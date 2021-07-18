import React from "react";
import {
  SubBarMenuListLink,
  SubBarMenuListLabel,
  LinkIcon,
  MoreDetailLink,
} from "./NavSubListElements";

const NavSubList = (item) => {
  const SubMenuSubMap = item.item.subExplore.map((i, key) => (
    <SubBarMenuListLink to={i.path} key={key}>
      <SubBarMenuListLabel>
        {key === 7 ? (
          <MoreDetailLink to="/">
            더보기
            <LinkIcon />
          </MoreDetailLink>
        ) : (
          i.title
        )}
      </SubBarMenuListLabel>
    </SubBarMenuListLink>
  ));

  return <>{SubMenuSubMap}</>;
};

export default NavSubList;
