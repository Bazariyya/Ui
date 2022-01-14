import React from "react";
import { Link } from "react-router-dom";
function NormalMenu() {
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

export default NormalMenu;
