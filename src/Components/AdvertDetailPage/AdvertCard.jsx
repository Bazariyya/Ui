import { Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../../Stylesheet/AdvertCard.css";

function AdvertCard({ product }) {
  console.log(product.name);
  return (
    <div className="card">
      <div className="product-image-area">
        <Link to="/advertDetail">
          <img
            src="https://im.haberturk.com/2019/02/07/ver1549525278/2346484_810x458.jpg"
            className="product-image"
            alt="Denim Jeans"
          />
        </Link>

        <button className="advert-detail-button globalbutton ">
          <Link className="whiteColor blueBacklink" to={`/advertDetail/${product.id}`}>
            <span className="josefinText mt-10">İlanı İncele</span>
          </Link>
        </button>
      </div>
      <div className="product-data-area">
        <h2 className="product-name-text comfortaaText">{product.name}</h2>
        <hr />
        <h3 className="product-price">
            Fiyat: {product.price} ₺
        </h3>
      </div>

      {/* 
            <h1 className='advert-name'>{product.name}</h1>
            <span className='pricetext'>{product.price}₺</span>
            <div className='description'>
                Bu bir açıklamadır
                Bu bir açıklamadır

                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır
                Bu bir açıklamadır

            </div>
            <Link to = "/advertDetail"><button className='advertDetailButton'>İlanı İncele</button></Link> */}
    </div>
  );
}

export default AdvertCard;
