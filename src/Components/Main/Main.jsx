import React,{useState,useEffect} from "react";
import "../../Stylesheet/Main.css";
import AdvertCard from "../AdvertDetailPage/AdvertCard";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from 'react-redux';
import { ProductService } from "../../Service/ProductService";
import { message } from "antd";
import { Product } from './../../Entities/Product';


function Main(props) {
  const [categories,setCategories] = useState([]);
  const [products,setProducts] = useState([]);

  const productService = new ProductService();
  
  useEffect(() => {
    setCategories(props.categories)
  },[props.categories])


  //get Products
  useEffect(async() => {
    const productArray = [];
    const productValue = await productService.getAllProducts();
    productValue.value.forEach(value => {
      const product = new Product({...value});
      productArray.push(product);
    })

    setProducts(productArray);
  },[])


  //getProducts image
  useEffect(() => {

  })

  

  return (
    <>
      <Navbar />
      <Sidebar categories={categories} />
      <div className="main-component">
        <div className="component-top">
          <h2>Hayvanlar</h2>
          
        </div>
        <div className="component-section">
            {
              products.map(product => (
                <AdvertCard key = {product.id} product = {product} />
              ))
            }
        </div>
      </div>
    </>
  );
}

export default Main;
