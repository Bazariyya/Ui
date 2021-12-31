import React from 'react'
import { Link } from 'react-router-dom';
import AppIcon from "../../assets/img/app-icon.png";
import '../../Stylesheet/logoAndName.css'
function LogoAndName({white}) {
    return (
        <div className="logo-and-name">
          <img
            draggable="false"
            alt="applogo"
            className="app-logo-img"
            src={AppIcon}
            width={32}
            height={32}
          />
          <span className="app-header comfortaaText">
            <Link to = "/" className={white == true ? "link whiteColor" : "link"}>Besi App</Link>
          </span>
        </div>
    )
}

export default LogoAndName
