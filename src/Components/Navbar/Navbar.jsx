import React, { useEffect, useState } from "react";
import "../../Stylesheet/Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const userSelector = useSelector((state) => state.user);
  const navigate = useNavigate();
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

  const NewAdvertHandler = () => {
    if (userSelector.isLoggedIn === false) {
      navigate("/login", {
        state: {
          notLoggedIn: true,
          message: "Yeni ilan oluşturabilmek için giriş yapın.",
        },
      });
    } else {
      navigate("/new-advert");
    }
  };

  return (
    <div className="topnav" id="myTopnav">
      <div className="left">
        {userSelector.isLoggedIn ? (
          <h5 className="loggedInEmailHeader">{userSelector.data.email}</h5>
        ) : (
          <div>
            <NormalMenu />
          </div>
        )}
      </div>

      <div className="right">
        <Button onClick={NewAdvertHandler} type="primary">
          Yeni İlan Oluştur
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
