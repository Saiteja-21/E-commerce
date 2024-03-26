import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faList} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
        <div className='addproduct'>
        <FontAwesomeIcon icon={faCartShopping}  size='lg'/>
        <p><b>add product</b></p>


        </div>

        </Link>
        <Link to={'/listproduct'} style={{textDecoration:'none'}}>
        <div className='listproducts'>
        <FontAwesomeIcon icon={faList}  size='lg'/>
        <p><b>all products</b></p>


        </div>

        </Link>
      
       
    </div>
  )
}

export default Sidebar
