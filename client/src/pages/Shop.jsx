import React, { useContext, useState } from 'react'
import banner from '../components/assets/banner2.jpg'
import { Link } from 'react-router-dom'
import { ShopContext } from "../context/Storecontext";
import Item from './Item';
import './Items.css' 

const Shop = () => { 
  // const [collections,setcollections]=useState(true) 
  const {products,allcollections,setallcollections}=useContext(ShopContext) 
  if(!allcollections){
    return(
      <div style={{width:'100%'}}>
       <div className="items">
      {products.map((item) => (
       <Item data={item} />
       
      ))}
    </div>
      </div>
     
    )
  }
  return (
    <div style={{ className:'shop',position:'relative',width:'100%'}}>
      <img src={banner} style={{width:'100%',height:'100vh'}}/>
      <Link to={"/"}>
      <button  onClick={()=>setallcollections(false)} style={{position:'absolute',top:'70%',left:'42%',width:'20%',minWidth:'200px', height:'15%',borderRadius:'20px',fontSize:'28px',cursor:'pointer',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',  backgroundColor: 'rgba(234,62,54)',
    color:'white',
    border:'none' }}>Browse Collections</button>
      

      </Link>
      
    </div>
  )
}

export default Shop
