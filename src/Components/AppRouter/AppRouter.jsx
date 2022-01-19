import React,{useState,useEffect} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthService } from "../../Service/AuthService";
import AdvertDetailPage from "../AdvertDetailPage/AdvertDetailPage";
import Main from "../Main/Main";
import NewAdvert from "../NewAdvert/NewAdvert";
import NotFound from "../NotFound/NotFound";
import ResetPassword from "../ResetPassword/ResetPassword";
import Login from "./../Login/Login";
import Register from "./../Register/Register";
import { getAllCategories } from '../../Service/CategoryService';
import { Category } from '../../Entities/Category';
import { useDispatch } from 'react-redux';
import { SuccessSaveCategories } from './../../Redux/actions/actions';
import { CategoryService } from './../../Service/CategoryService';
import { useSelector } from "react-redux";
function AppRouter() {
  const authService = new AuthService();
  const dispatch = useDispatch();
  const categoryService = new CategoryService();
  const [categories,setCategories] = useState([])
  const userSelector = useSelector(state => state.user);

  useEffect(() => {
    const categoryArray = []
    categoryService.getAllCategories().then(response => {
      response.data.value.forEach(e => {
        const category = new Category(e.id,e.categoryId,e.name,e.code);
        categoryArray.push(category);
      })
      setCategories(categoryArray)
    }).catch(err => {
      console.log(err)
    })
  },[])


  useEffect(() => {
    dispatch(SuccessSaveCategories(categories));
  },[categories])


  
  const routes = [
    {
      id:1,
      path:'/',
      element:<Main categories = {categories} />,
    },
    {
      id:2,
      path:'/login',
      element:<Login service={authService} />
    },
    {
      id:3,
      path:'/register',
      element:<Register service={authService}/>
    },
    {
      id:4,
      path:'/reset-password',
      element:<ResetPassword />,
    },
    {
      id:5,
      path:'/new-advert',
      element:<NewAdvert />,
    },
    {
      id:6,
      path:'*',
      element:<NotFound />,
    },
    {
      id:7,
      path:'/advertDetail/:productId',
      element:<AdvertDetailPage />
    }
  ]

  return (
    <Routes>
      {
        routes.map(r => (
          <Route key = {r.id} path = {r.path} element = {r.element}   />
        ))
      }
    </Routes>
  );
}

export default AppRouter;
