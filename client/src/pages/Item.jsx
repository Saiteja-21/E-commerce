import React, { useContext, useState } from "react";
import "./Items.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../context/Storecontext";

const Item = (props) => {
  const [noOfitems, setnoOfitems] = useState(0);
  const { _id, description, image, price, brand } = props.data;
  const { items, addTocart } = useContext(ShopContext);
  

  const value = items?.[_id] || 0;

  return (
    <div className="item">
      <div className="img">
        <img src={image} />
      </div>
      <div className="about">
        <p>
          <b>{brand}</b>
        </p>
        <p>{description}</p>

        <p className="price">
          <b>$ {price}</b>
        </p>
      </div>
      <div className="button">
      <button onClick={() => addTocart(_id)}>
  <FontAwesomeIcon icon={faCartShopping} /> {" "}
  add to cart   {" "}
  {value > 0 && (
    <span style={{ color: "white" }}>({value})</span>
  )}
</button>
      </div>
    </div>
  );
};

export default Item;
