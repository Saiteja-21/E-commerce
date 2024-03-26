import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/Storecontext";
import { useLocation } from "react-router-dom";
import Item from "./Item.jsx";
import './Items.css'


const Category = (props) => {
  const { products} = useContext(ShopContext);

  
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <h1 style={{marginLeft:'700px'}}>{props.category} wear</h1>
     <div className="items">
      {products.map((item) => (
        item.category===props.category? <Item data={item} />:<></>
       
      ))}
    </div>
    </>
   
  );
};

export default Category;
