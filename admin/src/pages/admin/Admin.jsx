import React from 'react'
import './Admin.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Addproduct from '../../components/addproducts/Addproducts.jsx'
import Listproduct from '../../components/listproducts/Listproducts.jsx'
const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<Addproduct/>}/>
            <Route path='/listproduct' element={<Listproduct/>}/>
        </Routes>
      
    </div>
  )
}

export default Admin
