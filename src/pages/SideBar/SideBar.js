import React, { Fragment } from "react";
import { SideBarData } from "./SideBarData";
import logo from "../../assets/logo.svg";
import {
  SidebarContainer,
  Logo,
  Menu,
  SidebarItems,
  SidebarList,
  SidebarListIcon,
  SidebarListTitle,
} from "./SideBarElements";
const SideBar = () => {
  return (
    <Fragment>
      <SidebarContainer>
        <SidebarItems>
          <Logo>
            <img src={logo} alt='hervest-logo' />
          </Logo>
        <Menu>
            Menu
        </Menu>
          {SideBarData.map((item, index) => (
            <SidebarList key={index}>
              <SidebarListIcon><img src={item.icon} alt="icon" /></SidebarListIcon>
              <SidebarListTitle>{item.title}</SidebarListTitle>
            </SidebarList>
          ))}
        </SidebarItems>
      </SidebarContainer>
    </Fragment>
  );
};

export default SideBar;
