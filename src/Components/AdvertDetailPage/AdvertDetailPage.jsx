import React, { useEffect, useRef, useState } from "react";
import "../../Stylesheet/AdvertDetailPage.css";
import { Alert, PageHeader, Button, Divider } from "antd";
import { RightOutlined, LeftOutlined, BookOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { ProductService } from "../../Service/ProductService";
import {Product} from '../../Entities/Product'

function AdvertDetailPage() {
  const [slideCount, setSlideCount] = useState(0);
  const [productImages, setProductImages] = useState([]);
  const [product,setProduct] = useState(null);
  const productService = new ProductService();
  const image2Url =
    "https://media.sandhills.com/img.axd?id=7233804621&wid=7063344741&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=W%2bYVMDYTdKPRd2rFB2ipzmmuFYS7l8qpyO2wVLsbBCE%3d";
  const imageUrl =
    "https://media.sandhills.com/img.axd?id=7233809721&wid=7063344741&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=TKPx33%2fjJ7s%2bnXYp0mYQRuwfBsHNxYdCCq2DTIDdin4%3d";
  const imageUrl3 =
    "https://media.sandhills.com/img.axd?id=7233789389&wid=7063344741&rwl=False&p=&ext=&w=150&h=112&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=%2bkwuUtOIHHBgcbDaBvkprdUOe8bqip0aZbd1P3tlOcU%3d";
  const imageUrl4 =
    "https://media.sandhills.com/img.axd?id=7233819727&wid=7063344741&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=RHiUL1CeACIN0GZmiZQ04mzCzZV%2b%2bv3rvZUKpd95oHs%3d";
  const imageUrl5 =
    "https://media.sandhills.com/img.axd?id=7233775557&wid=7063344741&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=iN2SxCrAyFfjXRmYl3Uq78oEGBxUEMrgjH%2bWNAsagCU%3d";
  const imageUrl6 =
    "https://media.sandhills.com/img.axd?id=7233821339&wid=7063344741&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=OV8EDjEEqKQMs4rvbVB6EZ7c5ZC4od0%2fiJIdByV%2fym0%3d";
  const imageUrl7 =
    "https://media.sandhills.com/img.axd?id=7233640825&wid=7063344741&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=N1q%2bD%2bc9ahkKEzCoW6my%2bP7%2b1zLixFNZJGZD4hxwa%2bM%3d";

  useEffect(() => {
    const imageArray = [
      imageUrl,
      image2Url,
      imageUrl3,
      imageUrl4,
      imageUrl5,
      imageUrl6,
      imageUrl7,
      imageUrl,
      image2Url,
      imageUrl3,
      imageUrl4,
      imageUrl5,
      imageUrl6,
      imageUrl7,
    ];
    setProductImages(imageArray);
  }, []);

  const onHandleNext = () => {
    setSlideCount(slideCount + 1);
  };

  const onHandlePrevious = () => {
    setSlideCount(slideCount - 1);
  };

  const onHandleSetSlideCount = (index) => {
    setSlideCount(index);
  };
  useEffect(() => {
    if (slideCount > productImages.length - 1) {
      setSlideCount(0);
    } else if (slideCount < 0) {
      setSlideCount(productImages.length - 1);
    }
  }, [slideCount]);


  const params = useParams();
  const productId = params.productId;


  useEffect(() => {
    productService.getProductImages(productId).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  },[])

  useEffect(() => {
    productService.getSingleProduct(productId).then(res => {
      const {value} = res;
      const responseProduct = new Product({...value});
      setProduct(responseProduct)
    }).catch(err => {
      console.log(err)
    })
  },[])


  return (
    <div className="advert-detail-page-component">
      <div className="product-detail-area">
        <div className="component-page-header">
          <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title="Geri Dön"
            subTitle="Diğer ilanlara göz atmaya devam et"
          />
        </div>
        <div className="images-and-price-card">
          <div className="images-slideshow">
            <div className="single-images">
              <button
                onClick={onHandleNext}
                className="slidecontrolbutton"
                id="next"
              >
                <RightOutlined />
              </button>
              <button
                onClick={onHandlePrevious}
                className="slidecontrolbutton"
                id="previous"
              >
                <LeftOutlined />
              </button>
              <img
                draggable={false}
                src={productImages[slideCount]}
                className="singleImage"
                alt="product-image"
              />
            </div>
            <div className="all-images-slide">
              {productImages.map((p, index) => (
                <div
                  style={
                    index === slideCount ? { border: "2px solid black" } : {}
                  }
                  className="all-images-slide-image"
                  key={index}
                >
                  <img
                    draggable="false"
                    src={p}
                    onClick={() => {
                      onHandleSetSlideCount(index);
                    }}
                    className="slideshow-single-image"
                  />
                </div>
              ))}
            </div>
            <div>
              <Alert
                type="info"
                message={`Bu ilanda ${productImages.length} adet görsel var`}
              ></Alert>
            </div>
          </div>
          <div className="product-price-card">
            <div className="product-price-information">
              <h2 className="product-title-information">{product?.name}</h2>
              <h2 className="product-price-text">Fiyat: {product?.price}₺</h2>
              <div className="advert-actions">
                <div>
                  <Button icon={<MoneyCollectOutlined />} type="primary" className="teklifButton">
                    Teklif Yap
                  </Button>
                </div>
                <Divider type="vertical"/> 
                <div>
                  <Button icon={<BookOutlined />}>Kaydet</Button>
                </div>
              </div>
            </div>
            <div className="product-seller-information"></div>
          </div>
        </div>
      </div>
      {/* <div className="properties-area"></div> */}
    </div>
  );
}

export default AdvertDetailPage;
