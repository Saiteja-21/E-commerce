import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo2.jpg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../context/Storecontext";

const Navbar = () => {
  const [category, setcategory] = useState("shop");
  const [value, setvalue] = useState(0);
  const { items, products } = useContext(ShopContext);
  useEffect(() => {
    let count = 0;
    for(let key in items){
      count=count+items[key]
    }
    setvalue(count);
  }, [items]);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} />
        <p>Fashion Wear</p>
      </div>
      <div className="category">
        <ul>
          <li onClick={() => setcategory("shop")}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              {" "}
              Shop{category == "shop" ? <hr /> : <></>}
            </Link>
          </li>
          <li onClick={() => setcategory("men")}>
            {" "}
            <Link
              to={"/men's clothing        "}
              style={{ textDecoration: "none" }}
            >
              Men {category == "men" ? <hr /> : <></>}
            </Link>
          </li>
          <li onClick={() => setcategory("women")}>
            {" "}
            <Link to={"/women's clothing"} style={{ textDecoration: "none" }}>
              Women {category == "women" ? <hr /> : <></>}
            </Link>
          </li>
          <li onClick={() => setcategory("kids")}>
            {" "}
            <Link to={"kids"} style={{ textDecoration: "none" }}>
              Kids {category == "kids" ? <hr /> : <></>}
            </Link>
          </li>
        </ul>
      </div>
      <div className="cart">
        {localStorage.getItem("token") ? (
          
           <button className="login"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.replace("/");
            }}
          >
            logout
          </button>
        
         
        ) : (
          <Link to={"/login"}>
            <button className="login">Login</button>
          </Link>
        )}

        <Link to={"/cart"}>
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </Link>
        <div className="cartcount">{value}</div>
      </div>
    </div>
  );
};

export default Navbar;
