import { Alert, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "../../Stylesheet/Sidebar.css";
import { Drawer } from "antd";
import HamburgerMenuSVG from "../../assets/img/hamburger-menu.png";
import { Collapse } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllSubCategories } from './../../Service/CategoryService';
import { FailedSaveCategories, FailedSaveSubCategories, StartSaveCategories, StartSaveSubCategories } from "../../Redux/actions/actions";
import { SuccessSaveCategories, SuccessSaveSubCategories } from './../../Redux/actions/actions';
import { Category } from './../../Entities/Category';
import { SubCategory } from './../../Entities/Subcategory';
const { SubMenu } = Menu;
const { Panel } = Collapse;

const Sidebar = () => {
  const [openKeys, setOpenKeys] = React.useState([]);
  const [isResponsive, setIsResponsive] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const responsive = useSelector((state) => state.responsive);
  const [categories,setCategories] = useState([]);
  const [subCategories,setSubCategories] = useState([]);
  const [rootSubmenuKeys,setRootSubMenuKeys] = useState([]) 
  const dispatch = useDispatch();

  useEffect(() => {
    setIsResponsive(responsive);
  }, [responsive]);

  useEffect(() => {

    const categoryArray = []
    dispatch(StartSaveCategories());
    getAllCategories().then(response => {
      response.data.value.forEach(e => {
        const category = new Category(e.id,e.categoryId,e.name,e.code);
        categoryArray.push(category);
      })
      setCategories(response.data.value);
      setRootSubMenuKeys(response.data.value.map(r => r.id.toString()))
    }).catch(err => {
      console.log(err)
      dispatch(FailedSaveCategories())
    }).finally(() => {
      dispatch(SuccessSaveCategories(categoryArray));
    })
  },[])

  useEffect(() => {
    const subCategoryArray = [];
    dispatch(StartSaveSubCategories())
    openKeys.forEach(id => {
      getAllSubCategories(parseInt(id)).then(res => {
        res.value.forEach(e => {
          const subCategory = new SubCategory(e.id,e.name,e.categoryId,e.code);
          subCategoryArray.push(subCategory)
        })
        setSubCategories(res.value)
      }).catch(err => {
        console.log(err)
        dispatch(FailedSaveSubCategories())
      }).finally(() => {
        dispatch(SuccessSaveSubCategories(subCategoryArray))
      })
    })
  },[openKeys])



  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
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
        openKeys={openKeys} onOpenChange={onOpenChange}
        style={{ width: "100%" }}
      >
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Ürün filtreleme" key="1">
            <Alert type="warning" message="Bu özellik şuan kullanılamıyor."></Alert>
          </Panel>
        </Collapse>
        {
          categories.map(category => (
            <SubMenu
              key={category.id}
              icon={<MenuOutlined />}
              title={category.name}
            >
              
              {
                subCategories.filter(sub => sub.categoryId === category.id).map(subCategory => (
                  <Menu.Item key={subCategory.id}>{subCategory.name}</Menu.Item>
                ))
              }
            </SubMenu>
          ))
        }
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
