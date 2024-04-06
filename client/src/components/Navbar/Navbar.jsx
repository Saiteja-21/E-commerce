import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo2.jpg";
import "./Navbar.css";
import { Link,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../context/Storecontext";
import { faBars } from "@fortawesome/free-solid-svg-icons";




const Navbar = () => {
  // const [category, setcategory] = useState("shop");
  const [value, setvalue] = useState(0);
  const [dropdown, setdropdown] = useState(true);
  const { items, products, setallcollections } = useContext(ShopContext);
  const navigate=useNavigate()

  useEffect(() => {
    let count = 0;
    for (let key in items) {
      count = count + items[key];
    }
    setvalue(count);
  }, [items]);



  return (
    <div className="navbar">
    
    
        <div className="logo">
        <div className="category-dropdown"> 
    
    {/* <button className="dropdown-button" onClick={() => setdropdown(!dropdown)}> CATEGORIES <FontAwesomeIcon icon={faCaretDown}/></button> */}
   
    <FontAwesomeIcon   onClick={() => setdropdown(!dropdown)} icon={faBars} style={{marginLeft:'-120%'}} size="lg"/>
    
     
      {!dropdown && (
        <div className="dropdown-elements">
          <Link 
            to={"/"}
            onClick={() => {
              setallcollections(false);
              setdropdown(true)
            }}
          >
            All Collections
          </Link>
          <Link to={"/men's clothing"} onClick={()=> setdropdown(true)}>Men</Link>
          <Link to={"/women's clothing"} onClick={()=> setdropdown(true)}>Women</Link>
          <Link to={"kids"}onClick={()=> setdropdown(true)}>Kids</Link>
        </div>
      )}
    </div>
        <Link
        to={"/"}
        style={{ textDecoration: "none",color:'black' }}
        onClick={() => setallcollections(true)}
      >
          <img src={logo} />
          </Link>
          {/* <p>Fashion Wear</p> */}
        </div>
     
    
      <div className="category">
        <ul>
          <li>
            {/* <Link
              to={"/"}
              style={{ textDecoration: "none" }}
              onClick={() => setallcollections(false)}
            >
              {" "}
              Shop{category == "shop" ? <hr /> : <></>}
            </Link> */}
          </li>
          <li >
            {" "}
            <Link className='categories'
              to={"/men's clothing        "}
              style={{ textDecoration: "none" }}
            >
              MEN 
            </Link>
          </li>
          <li>
            {" "}
            <Link  c className="categories" to={"/women's clothing"} style={{ textDecoration: "none" }}>
              WOMEN 
            </Link>
          </li>
          <li >
            {" "}
            <Link className="categories" to={"kids"} style={{ textDecoration: "none" }}>
              KIDS 
            </Link>
          </li>
        </ul>
      </div>
      <div className="cart">
        {localStorage.getItem("token") ? (
          <button
            className="navbarlogin"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.replace("/");
            }}
          >
            LOGOUT
          </button>
        ) : (
          // <Link to={"/login"}  style={{width:'90%',height:'30px',borderRadius:'10%'}}>
          //   <button  className="navbarlogin">Login</button>
          // </Link>
          <button onClick={()=>navigate('/login')}  className="navbarlogin">LOGIN</button>
        )}

        <Link to={"/cart"}>
          <FontAwesomeIcon  className='icon' icon={faCartShopping} size="2x" style={{color:'black'}}/>
        </Link>
        <div className="cartcount">{value}</div>
      </div>
    </div>
  );
};

export default Navbar;
