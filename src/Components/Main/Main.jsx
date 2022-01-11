import React,{useEffect} from "react";
import "../../Stylesheet/Main.css";
import AdvertCard from "../AdvertDetailPage/AdvertCard";
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
          
        </div>
        <div className="component-section">
            <AdvertCard />
            <AdvertCard />
            <AdvertCard />
            <AdvertCard />
            <AdvertCard />

        </div>
      </div>
    </>
  );
}

export default Main;
