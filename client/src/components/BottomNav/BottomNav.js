import React from "react";
import { BottomNavContainer, BottomNavLink } from "./BottomNav.styles.js";
import discover from "../../assets/bottom-nav-discover.svg";
import browse from "../../assets/bottom-nav-browse.svg";
import collections from "../../assets/bottom-nav-collections.svg";
import discoverHover from "../../assets/bottom-nav-discover-hover.svg";
import browseHover from "../../assets/bottom-nav-browse-hover.svg";
import collectionsHover from "../../assets/bottom-nav-collections-hover.svg";

const BottomNav = () => {
  return (
    <BottomNavContainer>
      <BottomNavLink icon={discover} hover={discoverHover} to="/discover" />
      <BottomNavLink icon={browse} hover={browseHover} to="/browse" />
      <BottomNavLink
        icon={collections}
        hover={collectionsHover}
        to="/collections"
      />
    </BottomNavContainer>
  );
};

export default BottomNav;
