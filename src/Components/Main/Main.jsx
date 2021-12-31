import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../../Stylesheet/Main.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function Main() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="main-component">
        <div className="component-top">
          <h4>Hayvanlar</h4>
          <Button type="primary">
            <Link className="textDecorationNone" to="/new-advert">
              Yeni İlan Oluştur
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Main;
