import React, { useEffect, useState } from "react";
import './Listproducts.css'

const Listproducts = () => {
  const [products, setproducts] = useState([]);
  const getproducts = async () => {
    const response = await fetch("https://e-commerce-2-4hp7.onrender.com/product/getall");
    const data = await response.json();
    console.log(data.products);
    setproducts(data.products);
  };

  const handleclick=async(id)=>{
    const response = await fetch("https://e-commerce-2-4hp7.onrender.com/product/remove",{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",

      },
      body:JSON.stringify({id:id})
    });
 await getproducts()

  }
  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div>
      <div className="items">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="item">
            <div className="img">
              <img src={product.image} />
            </div>
            <div className="about">
              <p>
                <b>{product.brand}</b>
              </p>
              <p>{product.description}</p>

              <p className="price">
                <b>$ {product.price}</b>
              </p>
            </div>
            <div className="button">
              <button onClick={()=>handleclick(product.id)}>
                 Remove Product 
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}

      </div>
     
    </div>
  );
};

export default Listproducts;
