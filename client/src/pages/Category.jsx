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
     <div className="items">
      {products.map((item) => (
        item.category===props.category? <Item data={item} />:<></>
       
      ))}
    </div>
    </>
   
  );
};

export default Category;
