import { Divider } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../Service/Endpoints";
import "../../Stylesheet/AdvertCard.css";

function AdvertCard({ product }) {
  const productImagesSelector = useSelector(state => state.productImages);
  const image = productImagesSelector.find(p => p.productId === product.id);
  return (
    <div className="card">
      <div className="product-image-area">
        <Link to={`/advertDetail/${product.id}`}>
          <img
            src={`${BASE_IMAGE_URL}/${image?.productId}-${image?.id}.${image?.filecExtension}`}
            className="product-image"
            alt="Ürün Resmi"
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
