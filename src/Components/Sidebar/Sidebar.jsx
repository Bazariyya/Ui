import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "../../Stylesheet/Sidebar.css";
import { Drawer } from "antd";
import { useSelector } from "react-redux";
import HamburgerMenuSVG from "../../assets/img/hamburger-menu.png";
import NormalMenu from "../Navbar/NormalMenu";
// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const { SubMenu } = Menu;
const Sidebar = () => {
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);
  const [isResponsive, setIsResponsive] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const responsive = useSelector((state) => state.responsive);
  useEffect(() => {
    setIsResponsive(responsive);
  }, [responsive]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const openSidebar = () => {
    setSidebarVisible(true);
  };

  const MenuComponent = () => {
    return (
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: "100%" }}
      >
        <SubMenu
          key="sub1"
          icon={<MenuOutlined />}
          title="Navigation One"
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          icon={<MenuOutlined />}
          title="Navigation Two"
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          icon={<MenuOutlined />}
          title="Navigation Three"
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  };

  const ResponsiveSidebar = () => {
    return (
      <div className="responsive-sidebar-area">
        <img
          src={HamburgerMenuSVG}
          alt="sidebar-menu-image"
          width={32}
          height={32}
          onClick={openSidebar}
        />
        <Drawer
          title="Menü"
          placement="left"
          visible={sidebarVisible}
          onClose={closeSidebar}
        >
          <MenuComponent />
          <div className="normal-menu-area">
            <NormalMenu />
          </div>
        </Drawer>
      </div>
    );
  };

  return (
    <div className="sidebar-component">
      {isResponsive === true ? <ResponsiveSidebar /> : <MenuComponent />}
    </div>
  );
};
export default Sidebar;
