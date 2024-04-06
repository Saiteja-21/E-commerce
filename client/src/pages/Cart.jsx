import React, { useContext } from 'react'
import { ShopContext } from '../context/Storecontext'
import './Cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const Cart = () => {
  const {products,items,removeFromcart}=useContext(ShopContext)
  console.log(products)
  let totalCost = 0;
  if(items==null){
    return(
      <h1 style={{marginLeft:'660px'}}>
  No items in cart
      </h1>
    
    )
  }
  products.forEach(product => {
    if (items[product._id] > 0) {
      totalCost += product.price * items[product._id];
    }
  });

 


  return (
    <div className='usercart'>
     <table className='table'>
    
      <tr>
        <th className='first'>
          Product
        </th>
        <th>
          No. of products
        </th>
        <th>
          price
        </th>
        <th>
          Remove
        </th>
      </tr>


      
      
      {products.map((product)=>(
        items[product._id]>0&&
        <tr>
          <td className='first'>
            <p className='row'>
            <img src={product.image}/>
        
            </p>
        

          </td>
          <td>
            <p className='row'>
            {items[product._id]}

            </p>
           
          </td>
          <td>
            <p className='row'>
            $ {product.price * items[product._id]}
            </p>
           
          </td>
          <td>
          <FontAwesomeIcon icon={faTrash}  onClick={()=>removeFromcart(product._id)}/>
           
          </td>

        </tr>
        
        
       
       
      )
      
       
       

      )}

      
    
      
     
      
  
      
   
     </table>

     <div className='cost'>
      <h2>Amount</h2>
   
        <div className='tax'>
          <p>cost</p>
          <p>-</p>
          <p>$ {totalCost}</p>
        </div>
        <div className='tax'>
          <p>Tax</p>
          <p>-</p>
          <p>$ 0</p>
        </div>
        <div className='tax'>
          <p>Total price</p>
          <p>-</p>
          <p>$ {totalCost}</p>
        </div>
      
      <div className='bill'>
        <Link to={'/'}>
        <button>Continue shopping</button>
        </Link>
     
      <button>Pay</button>


      </div>
     
     </div>
    
     

    </div>
   
  )
}

export default Cart
