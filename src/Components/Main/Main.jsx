import React, { useState, useEffect } from "react";
import "../../Stylesheet/Main.css";
import AdvertCard from "../AdvertDetailPage/AdvertCard";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { ProductService } from "../../Service/ProductService";
import { Alert, Button, Divider, Input, message, Select } from "antd";
import { Product } from "./../../Entities/Product";
import { Link } from "react-router-dom";
import Sorting from "../Sorting/Sorting";
import { FinishSaveCategories, StartSaveCategories, StartSaveProduct, SuccessSaveCategories } from "../../Redux/actions/actions";
import Loading from "../Loading/Loading";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;
function Main(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResultProducts, setSearchResultProducts] = useState([]);
  const [sortingType, setSortingTpye] = useState("sirala");
  const [loading, setLoading] = useState(true);
  const productSelector = useSelector(state => state.products);


  const userSelector = useSelector(state => state.user);
  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  function handleChange(value) {
    setSortingTpye(value)
  }

  useEffect(() => {
    setProducts(productSelector)
    setLoading(false)

  })
  
  const onHandleChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    if (searchText.length > 0) {
      setSearchResultProducts(
        products.filter((product) =>
          product.name
            .trim()
            .toLowerCase()
            .includes(searchText.trim().toLowerCase())
        )
      );
    } else {
      setSearchResultProducts([]);
    }
  }, [searchText]);




  const sortingArtanFiyat = () => {
    return products.sort((a, b) => {
      return b.price - a.price;
    })

  }
  const sortingAzalanFiyat = () => {
    return products.sort((a, b) => {
      return a.price - b.price;
    })
  }
  useEffect(() => {
    if (sortingType === 'artanFiyat') {
      sortingArtanFiyat();
    }
    else if (sortingType === 'azalanFiyat') {
      sortingAzalanFiyat();
    }
  }, [sortingType])


  return (
    <div style={{position:'absolute',top:0,left:0,width:'100%',height:'90%'}}>
      <Navbar />
      <Sidebar categories={categories} />
      <div className="main-component">
        <div className="component-top">
          <h2>bazariyya.com</h2>
          <div className="searchbar-area">
            <Sorting handle={handleChange} />
            <Input
              prefix = {<SearchOutlined />}
              placeholder="İlanlar arasında arama yapın. Ör.: Yeşil Dana"
              value={searchText}
              onChange={onHandleChangeSearchText}
            />
          </div>
        </div>
        <div className="component-section">
          {
            loading ? <Loading /> :
              searchText.length > 0 ? (
                searchResultProducts.length > 0 ? (
                  searchResultProducts.map((product) => (
                    <AdvertCard key={product.id} product={product} />
                  ))
                ) : (
                  <div className="not-found-product-search-result">
                    <div className="search-result-area">
                      <Alert
                        type="warning"
                        message="Böyle bir ürün şuan bulunamadı"
                      ></Alert>
                      <Divider>Aradığın ürünü bulamadıysan</Divider>
                      <Link className="textDecorationNone" to="/new-advert">
                        <Button type="primary">Kendi ilanını oluştur</Button>
                      </Link>
                    </div>
                  </div>
                )
              ) : (
                products.map((product) => (
                  <AdvertCard key={product.id} product={product} />
                ))
              )
          }
        </div>
      </div>
    </div>
  );
}

export default Main;
