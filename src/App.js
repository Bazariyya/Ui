import "./Stylesheet/Global.css";
import "antd/dist/antd.css";
import AppRouter from "./Components/AppRouter/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FailedSaveCategories,
  ResponsiveModeOff,
  ResponsiveModeOn,
  SetRouteSuccess,
  StartSaveCategories,
  SuccessSaveCategories
} from "./Redux/actions/actions";
import { getScreenWidthAndHeight } from "./Other/ResponsiveControl";
import "./Stylesheet/App.css";
function App(props) {
  const route = useSelector((state) => state.route);
  const dispatch = useDispatch();
  const responsive = useSelector((state) => state.responsive);
  const location = useLocation();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
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
