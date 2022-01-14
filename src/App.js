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
import { ProductService } from "./Service/ProductService";
import { message } from "antd";
import {LogoutSuccess} from './Redux/actions/actions'
function App(props) {
  const route = useSelector((state) => state.route);
  const dispatch = useDispatch();
  const responsive = useSelector((state) => state.responsive);
  const location = useLocation();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const productService = new ProductService();
  
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


  useEffect(() => {
      productService.getProductAttributeDefinition().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
        message.error('Def alınırken hata oluştu')
      })
  },[])


  useEffect(() => {
    const expireTime = localStorage.getItem('expireTime');
    const now = new Date();
    const route = localStorage.getItem('route');

    if(now < expireTime){
      message.error('Token süresi bitti.Tekrar giriş yapın')
      dispatch(LogoutSuccess());
      navigate('/login')
    }
    else if(route !== '/register' || route !== '/login'){
      navigate(route)
    }


  },[])

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
