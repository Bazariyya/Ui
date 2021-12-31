import React from "react";
import { Link } from "react-router-dom";

function NormalMenu() {
    return (
      <ul className="navbar-menu">
        <li>
          <Link className="link" to="/login">
            Oturum Aç
          </Link>
        </li>
        <li>
          <Link className="active textDecorationNone" to="/register">
            Kayıt Ol
          </Link>
        </li>
      </ul>
    );
}

export default NormalMenu;
