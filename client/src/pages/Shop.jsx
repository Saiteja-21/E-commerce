import React, { useContext, useState } from 'react'
import banner from '../components/assets/banner2.jpg'
import { Link } from 'react-router-dom'
import { ShopContext } from "../context/Storecontext";
import Item from './Item';
import './Items.css'
const Shop = () => { 
  const [collections,setcollections]=useState(true) 
  const {products}=useContext(ShopContext) 
  if(!collections){
    return(
      <div>
      <h1 style={{marginLeft:'700px'}}>All Collections</h1>
       <div className="items">
      {products.map((item) => (
       <Item data={item} />
       
      ))}
    </div>
      </div>
     
    )
  }
  return (
    <div style={{position:'relative'}}>
      <img src={banner} style={{width:'100%',height:'100vh'}}/>
      <Link to={"/"}>
      <button  onClick={()=>setcollections(!collections)} style={{position:'absolute',top:'495px',left:'620px',width:'260px',height:'86px',borderRadius:'20px',fontSize:'28px',cursor:'pointer',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>Browse Collections</button>
      

      </Link>
      
    </div>
  )
}

export default Shop
