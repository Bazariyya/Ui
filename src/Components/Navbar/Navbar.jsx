import React, { useEffect, useState } from "react";
import "../../Stylesheet/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { getScreenWidthAndHeight } from "../../Other/ResponsiveControl";
import { Button, Drawer } from "antd";
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

  function ResponsiveMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  useEffect(() => {
    ResponsiveMenu()
  }, [])

  return (
    <div className="topnav" id="myTopnav">
      <div className="left">
        <Link to="/login">Oturum Aç</Link>
        <Link className="active" to="/register">Kayıt Ol</Link>
      </div>

      <div className="right">
        <Link className="textDecorationNone" to="/new-advert">
          <Button type="primary">
            Yeni İlan Oluştur
          </Button>
        </Link>
      </div>
      <a className="icon" onClick={ResponsiveMenu}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Navbar;
