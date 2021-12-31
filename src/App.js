import "./Stylesheet/Global.css";
import "antd/dist/antd.css";
import AppRouter from "./Components/AppRouter/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ResponsiveModeOff,
  ResponsiveModeOn,
  SetRouteSuccess,
} from "./Redux/actions/actions";
import { getScreenWidthAndHeight } from "./Other/ResponsiveControl";
import "./Stylesheet/App.css";
import { Category } from "./Entities/Category";
import { SubCategory } from "./Entities/Subcategory";
import {
  SaveSelectedCategory,
  SuccessSaveCategories,
  SuccessSaveSubCategories,
} from "./Redux/actions/actions"

function App(props) {
  const route = useSelector((state) => state.route);
  const dispatch = useDispatch();
  const responsive = useSelector((state) => state.responsive);
  const location = useLocation();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      const category1 = new Category(1, "Büyükbaş", false);
      const category2 = new Category(2, "Küçükbaş", false);
      const subCategory1 = new SubCategory(1, "Deve", true, 1);
      const subCategory2 = new SubCategory(2, "Keçi", true, 2);

      dispatch(SuccessSaveCategories(category1));
      dispatch(SuccessSaveCategories(category2));
      dispatch(SuccessSaveSubCategories(subCategory1));
      dispatch(SuccessSaveSubCategories(subCategory2));
  }, []);
  useEffect(() => {
    localStorage.setItem("route", location.pathname);
    dispatch(SetRouteSuccess(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    if (window.innerWidth < 600) {
      dispatch(ResponsiveModeOn());
    } else {
      dispatch(ResponsiveModeOff());
    }
  }, []);

  function onResizeHandle() {
    window.onresize = () => {
      setWindowWidth(getScreenWidthAndHeight().width);
      if (windowWidth < 600) {
        dispatch(ResponsiveModeOn());
      } else if (windowWidth >= 600) {
        dispatch(ResponsiveModeOff());
      }
    };
  }
  onResizeHandle();
  
  useEffect(() => {
    onResizeHandle();
  }, [window.innerWidth]);

  useEffect(() => {
    const route = localStorage.getItem("route");
    navigate(route);
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
