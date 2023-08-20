import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import Categories from './components/Categories';
import Blog from './components/Blog';
import ReadMore from './components/ReadMore';
import ReadMore1 from './components/ReadMore1';
import ReadMore2 from './components/ReadMore2';
import ReadMore3 from './components/ReadMore3';
import ReadMore4 from './components/ReadMore4';
import ReadMore5 from './components/ReadMore5';


function App() {
  return (
    <>
      <Header/>
  
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/products" element={<Product />} />
       <Route path="/categories" element={<Categories />} />
       <Route path="/products/:id" element={<ProductDetail />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/checkout" element={<Checkout />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/blog" element={<Blog />} />
       <Route path="/readMore" element={<ReadMore />} />
       <Route path="/readMore1" element={<ReadMore1 />} />
       <Route path="/readMore2" element={<ReadMore2 />} />
       <Route path="/readMore3" element={<ReadMore3 />} />
       <Route path="/readMore4" element={<ReadMore4 />} />
       <Route path="/readMore5" element={<ReadMore5 />} />
        <Route path='/' />
      
      </Routes>
    
      <Footer/>
    </>
  );
}

export default App;
