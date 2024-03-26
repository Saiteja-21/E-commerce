import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
// import products from "../components/products.js";

export const ShopContext = createContext(null);



const StorecontextProvider = (props) => {
  const [items, setItems] = useState();
  const [products,setproducts]=useState([])


  const getdata=async()=>{
    const response=await fetch('http://localhost:8000/product/getall')
    const data=await response.json();
    setproducts(data.products);
    
  }

  const getCart=async()=>{
    const response=await fetch('http://localhost:8000/cart/getall',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'token':`${localStorage.getItem('token')}`,
        'Content-Type':'application/json',

      },
      body:"",
    })
    let cart=await response.json();
    console.log(cart)
    setItems(cart)
    console.log(items)
  

  }

  useEffect(()=>{
    getdata()
    if(localStorage.getItem('token')){
      getCart()

    }
   
    
  },[items])

  const addTocart = async(id) => {
    setItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
   
    if(localStorage.getItem('token')){
      const response=await fetch('http://localhost:8000/cart/add',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'token':`${localStorage.getItem('token')}`,
          'Content-Type':'application/json'

        },
        body:JSON.stringify({'id':id})
      }) 
      const data=await response.json();
      console.log(data) 
      console.log('111111111')

    }
  };

  const removeFromcart = async(id) => {
    setItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    if(localStorage.getItem('token')){
      const response=await fetch('http://localhost:8000/cart/remove',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'token':`${localStorage.getItem('token')}`,
          'Content-Type':'application/json'

        },
        body:JSON.stringify({'id':id})
      }) 
      const data=await response.json();
      console.log(data)

    }
  };

  const contextValue = { products, addTocart, removeFromcart, items };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default StorecontextProvider;
