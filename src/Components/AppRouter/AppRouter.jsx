import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthService } from "../../Service/AuthService";
import Main from "../Main/Main";
import NewAdvert from "../NewAdvert/NewAdvert";
import NotFound from "../NotFound/NotFound";
import ResetPassword from "../ResetPassword/ResetPassword";
import Sidebar from "../Sidebar/Sidebar";
import Login from "./../Login/Login";
import Register from "./../Register/Register";

function AppRouter() {
  const authService = new AuthService();


  const routes = [
    {
      id:1,
      path:'/',
      element:<Main />,
    },
    {
      id:2,
      path:'/login',
      element:<Login />
    },
    {
      id:3,
      path:'/register',
      element:<Register/>
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