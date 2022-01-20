import "./Stylesheet/Global.css";
import "antd/dist/antd.css";
import AppRouter from "./Components/AppRouter/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LoginSuccess,
  ResponsiveModeOff,
  ResponsiveModeOn,
  SaveProduct,
  SaveProductImages,
  SaveServiceInstance,
  SetRouteSuccess,
} from "./Redux/actions/actions";
import { getScreenWidthAndHeight } from "./Other/ResponsiveControl";
import "./Stylesheet/App.css";
import { ProductService } from "./Service/ProductService";
import { message } from "antd";
import {LogoutSuccess} from './Redux/actions/actions'
import {AuthService} from './Service/AuthService';
import { UserService } from "./Service/UserService";
import { User } from "./Entities/User";
import Loading from "./Components/Loading/Loading";
import { CategoryService } from "./Service/CategoryService";
import { Product } from "./Entities/Product";
function App(props) {
  const route = useSelector((state) => state.route);
  const dispatch = useDispatch();
  const responsive = useSelector((state) => state.responsive);
  const location = useLocation();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const productService = new ProductService();
  const authService = new AuthService();
  const userService = new UserService();
  const categoryService = new CategoryService();
  const [tokenLoading,setTokenLoading] = useState(true);
  const [products,setProducts] = useState([]);
  useEffect(() => {
    dispatch(SaveServiceInstance(productService,authService,userService,categoryService));
  },[])
  
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


  // useEffect(() => {
  //     productService.getProductAttributeDefinition().then(res => {
  //       console.log(res)
  //     }).catch(err => {
  //       console.log(err)
  //       message.error('Def alınırken hata oluştu')
  //     })
  // },[])

  //get Products
  useEffect(async () => {
    const productArray = [];
    const productValue = await productService.getAllProducts();
    productValue.value.forEach((value) => {
      const product = new Product({ ...value });
      productArray.push(product);
      
    });
    dispatch(SaveProduct(productArray));
    setProducts(productArray)
  }, []);

  useEffect(() => {
    const images = [];
    products.forEach(p => {
      productService.getProductImages(p.id).then(res => {
        if(res.value.length > 0) {
          res.value.forEach(r => {
            images.push(r)
          })
        }
      })
    })
    dispatch(SaveProductImages(images));
  },[products])



  useEffect(() => {
    const route = localStorage.getItem('route');
    const token = localStorage.getItem('token');

    if(token !== null){
      
      authService.tokenControl(token).then(res => {
        if(res.isSuccess === true) {
          const {email} = res.value;
          userService.getUser(email).then(res => {
            const user = new User({...res.value});
            dispatch(LoginSuccess(user,token));
          })
          
          navigate(route);
        }
        else{
          localStorage.setItem('route','/')
          localStorage.removeItem('token');
        }
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        setTokenLoading(false);
      })
    }
    else{
      dispatch(LogoutSuccess());
      localStorage.setItem('route','/')
      setTokenLoading(false);
    }
  },[])


  return (
    <div className="App">
      {
        tokenLoading ? <Loading /> : <AppRouter />
      }
    </div>
  );
}

export default App;
