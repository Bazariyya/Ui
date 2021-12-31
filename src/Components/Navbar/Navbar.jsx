import React, { useEffect, useState } from "react";
import "../../Stylesheet/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { getScreenWidthAndHeight } from "../../Other/ResponsiveControl";
import { Drawer } from "antd";
import HamburgerMenu from "../../assets/img/hamburger-menu.png";
import LogoAndName from "../LogoAndName/LogoAndName";
import { useSelector } from "react-redux";
import NormalMenu from "./NormalMenu";

function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();
  const responsive = useSelector((state) => state.responsive);

  useEffect(() => {
    setIsResponsive(responsive);
  }, [responsive]);

  const showDrawer = () => {
    setMenuVisible(true);
  };
  const onClose = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    setMenuVisible(false);
  }, [location.pathname]);

  const RenderHamburgerMenu = () => {
    return (
      <Drawer
        title="Menü"
        placement="right"
        onClose={onClose}
        visible={menuVisible}
      >
        <NormalMenu />
      </Drawer>
    );
  };

  return (
    <div className="navbar-component">
      <div className="navbar-left">
        <LogoAndName />
      </div>
      <div className="navbar-right">
        {isResponsive ? null : <NormalMenu />}
      </div>
    </div>
  );
}

export default Navbar;
