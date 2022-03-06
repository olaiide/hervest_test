import React, { Fragment, useState } from "react";
import { SideBarData } from "./SideBarData";
import { X } from "phosphor-react";
import logo from "../../assets/logo.svg";
import {
  SidebarContainer,
  Logo,
  Menu,
  SidebarItems,
  SidebarList,
  SidebarListIcon,
  SidebarListTitle,
  MobileTopBar,
  Bars,
  Logoo,
} from "./SideBarElements";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <SidebarContainer>
        <SidebarItems click={isOpen}>
          <Logo>
            <img src={logo} alt='hervest-logo' />
          </Logo>
          <div className='closebtn' onClick={openMobileMenu}>
            <X size={28} />
          </div>
          <Menu>Menu</Menu>
          {SideBarData.map((item, index) => (
            <SidebarList key={index} title={item.title}>
              <SidebarListIcon>
                <img src={item.icon} alt='icon' />
              </SidebarListIcon>
              <SidebarListTitle>{item.title}</SidebarListTitle>
            </SidebarList>
          ))}
        </SidebarItems>
      </SidebarContainer>
      <MobileTopBar>
        <Logoo>
          <img src={logo} alt='mobile monnyremit logo' />
        </Logoo>
        <Bars onClick={openMobileMenu}>
          <div className='wrapper'>
            <div className='bars'></div>
            <div className='bars'></div>
            <div className='bars'></div>
          </div>
        </Bars>
      </MobileTopBar>
    </Fragment>
  );
};

export default SideBar;
