import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function NormalMenu() {

  const [login,setLogin] = useState(false);

  const user = useSelector(state => state.user);


  useEffect(() => {
    setLogin(user.isLoggedIn)
  },[user])

  if(login === false) {
    return (
      <div className="navbar-menu">
        <Link className="link" to="/login">
          Oturum Aç
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link className="active textDecorationNone" to="/register">
          Kayıt Ol
        </Link>
      </div>
    );
  }
  else{
    return <></>
  }
}

export default NormalMenu;
