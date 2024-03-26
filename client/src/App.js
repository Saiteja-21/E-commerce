import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx';
import Shop from './pages/Shop.jsx';
import Category from './pages/Category.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';

import Loginsignup from './pages/Loginsignup.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path="/men's clothing" element={<Category category="men"/>}/>
        <Route path="/women's clothing" element={<Category category="women"/>}/>
        <Route path="/kids" element={<Category category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
    
      <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    
   
    </div>
  );
}

export default App;
