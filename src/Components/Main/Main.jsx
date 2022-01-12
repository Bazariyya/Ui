import React, { useState, useEffect } from "react";
import "../../Stylesheet/Main.css";
import AdvertCard from "../AdvertDetailPage/AdvertCard";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { ProductService } from "../../Service/ProductService";
import { Alert, Button, Divider, Input, message, Select } from "antd";
import { Product } from "./../../Entities/Product";
import { Link } from "react-router-dom";
import Sorting from "../Sorting/Sorting";

const { Search } = Input;
const { Option } = Select;
function Main(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResultProducts, setSearchResultProducts] = useState([]);
  const productService = new ProductService();
  const [sortingType, setSortingTpye] = useState("sirala");

  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  function handleChange(value) {
    setSortingTpye(value)
  }

  //get Products
  useEffect(async () => {
    const productArray = [];
    const productValue = await productService.getAllProducts();
    productValue.value.forEach((value) => {
      const product = new Product({ ...value });
      productArray.push(product);
    });

    setProducts(productArray);
  }, []);

  //getProducts image
  useEffect(() => {});

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
      console.log(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
      console.log(searchText);
    } else {
      setSearchResultProducts([]);
    }
  }, [searchText]);


  const sortingArtanFiyat = () => {
    return products.sort((a,b) => {
      return b.price-a.price;
    })

  }
  const sortingAzalanFiyat = () => {
    return products.sort((a,b) => {
      return a.price-b.price;
    })
  }
  useEffect(() => {
    if(sortingType === 'artanFiyat') {
      sortingArtanFiyat();
    }
    else if(sortingType === 'azalanFiyat'){
      sortingAzalanFiyat();
    }
  },[sortingType])

  return (
    <>
      <Navbar />
      <Sidebar categories={categories} />
      <div className="main-component">
        <div className="component-top">
          <h2>bazariyya.com</h2>
          <div className="searchbar-area">
            <Sorting handle = {handleChange} />
            <Search
              placeholder="İlanlar arasında arama yapın. Ör.: Yeşil Dana"
              value={searchText}
              onChange={onHandleChangeSearchText}
              enterButton
            />
          </div>
        </div>
        <div className="component-section">
          {searchText.length > 0 ? (
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
                  <Divider plain>Aradığın ürünü bulamadıysan</Divider>
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
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
