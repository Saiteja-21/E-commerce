import React from 'react'
import banner from '../components/assets/banner2.jpg'
import { Link } from 'react-router-dom'
const Shop = () => {
  return (
    <div style={{position:'relative'}}>
      <img src={banner} style={{width:'100%',height:'100vh'}}/>
      <Link to={"/men's clothing"}>
      <button  style={{position:'absolute',top:'495px',left:'620px',width:'260px',height:'86px',borderRadius:'20px',fontSize:'28px',cursor:'pointer',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>Browse Collections</button>
      

      </Link>
      
    </div>
  )
}

export default Shop
