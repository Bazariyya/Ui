import React, { useEffect, useRef, useState } from "react";
import "../../Stylesheet/AdvertDetailPage.css";
import { Alert, PageHeader, Button, Divider, Descriptions } from "antd";
import { RightOutlined, LeftOutlined, BookOutlined, MailOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ProductService } from "../../Service/ProductService";
import { Product } from '../../Entities/Product'
import { useSelector } from "react-redux";
import { BASE_IMAGE_URL } from "../../Service/Endpoints";

function AdvertDetailPage() {
  const [slideCount, setSlideCount] = useState(0);
  const [productImages, setProductImages] = useState([]);
  const [product, setProduct] = useState(null);
  const productService = new ProductService();
  const navigate = useNavigate();
  const userSelector = useSelector(state => state.user);
  const [activeImage,setActiveImage] = useState("");


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
      setProductImages(res.value);
      setActiveImage(`${res.value[0].productId}-${res.value[0].id}.${res.value[0].filecExtension}`);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    productService.getSingleProduct(productId).then(res => {
      const { value } = res;
      if(value === null || value === undefined) {
        navigate("/")
      }
      const responseProduct = new Product({ ...value });
      setProduct(responseProduct)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    const image = productImages[slideCount];
    setActiveImage(`${image?.productId}-${image?.id}.${image?.filecExtension}`);
  },[slideCount])


  const onTeklifHandle = () => {
    if(userSelector.isLoggedIn === false) {
      navigate('/login',{state:{notLoggedIn:true,message:"Teklif verebilmek için giriş yapın"}})
    }
    else{

    }
  }

  const onSaveHandle = () => {
    if(userSelector.isLoggedIn === false) {
      navigate('/login',{state:{notLoggedIn:true,message:"İlanı kayıt edebilmek için giriş yapın"}})
    }
    else{
      
    }
  }

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
                src={`${BASE_IMAGE_URL}/${activeImage}`}
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
                    alt={`${p.productId}_${p.id}.${p.filecExtension}`}
                    src={`${BASE_IMAGE_URL}/${p.productId}-${p.id}.${p.filecExtension}`}
                    onClick={() => {
                      onHandleSetSlideCount(index);
                    }}
                    className="slideshow-single-image"
                  />
                </div>
              ))}
            </div>
            <br />
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
                  <Button icon={<MoneyCollectOutlined />} onClick={onTeklifHandle} type="primary" className="teklifButton">
                    Teklif Yap
                  </Button>
                </div>
                <Divider type="vertical" />
                <div>
                  <Button icon={<BookOutlined />} onClick={onSaveHandle}>Kaydet</Button>
                </div>
              </div>
            </div>
            <div className="product-seller-information">
              <h4 className="product-seller-information-title">İlan Sahibi Bilgileri</h4>
              <div className="seller-section">
                <div className="product-seller-information-area">

                  <div className="seller-name-surname">
                    <p className="seller-name-surname-text">
                      <b>Ad-Soyad:</b> Yusuf Tekin
                    </p>
                  </div>
                  <div className="seller-phone">
                    <p className="seller-phone"><b>Telefon:</b> +123456789</p>
                  </div>
                  <div className="seller-phone">
                    <p className="seller-phone"><b>Mail:</b> ilansahibi@eposta.com</p>
                  </div>
                  <div className="seller-adress">
                    <p className="seller-adress-city">
                      <b>İl:</b> Kırşehir
                    </p>
                    <p className="seller-adress-distict">
                      <b>İlçe:</b> Merkez
                    </p>
                    <p className="seller-open-adress">
                      <b>Adres Tanımı:</b> Bilmem neresi...
                    </p>
                  </div>
                </div>
                <div className="seller-actions">
                  <Button type="primary" icon={<MailOutlined />} className="sendMailButton">E-Posta Gönder</Button>
                  <Button>Diğer İlanları</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="properties-area">
       <Divider type="horizontal">İlan Detayları</Divider>
       <br />
        <Descriptions
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <br/>
          <br/>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <br/>
          <br/>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <br/>
          <br/>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <br/>
          <br/>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <br/>
          <br/>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
}

export default AdvertDetailPage;
