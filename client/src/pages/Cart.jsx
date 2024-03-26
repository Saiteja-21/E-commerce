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
    <div>
     <table className='table'>
    
      <tr>
        <th>
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
          <td>
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
      <p>Cost &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- &nbsp; &nbsp; &nbsp; &nbsp;$ {totalCost} </p>
      <p>Tax    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- &nbsp; &nbsp; &nbsp; &nbsp;$ 0 </p>
      <p>Delivery Charges   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- &nbsp; &nbsp; &nbsp; &nbsp;$ 0</p>
      <p>Total Price  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- &nbsp; &nbsp; &nbsp; &nbsp;$ {totalCost}</p>
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
