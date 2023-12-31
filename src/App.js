
// Import Swiper styles
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Shop from './pages/Shop';
import ErrorPage from './pages/ErrorPage';
import SingleProduct from './pages/SingleProduct';
import CartShop from './pages/CartShop';
import { useState } from 'react';
import './css/all.min.css'
import 'swiper/css';
import './App.css';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
      
    // State Of Products In Cart
    let [cartProducts, setCartProducts] = useState([]) 



    // Handel Function Add To Cart
    const addToCart = (product) => {

      // Find Target Product 
      const exitProduct = cartProducts.find((item) => {
        return (item.id === product.id)
      })


      // Check If Product Was Added Or Not
      if (exitProduct) {
        alert('This Product Was Added')
      } else {
        setCartProducts([...cartProducts,product])
        alert('Product Add To Cart')
      }
    }

    window.addEventListener("scroll", e => {
      if (window.scrollY >= 1000) {
        document.body.querySelector('.scroll-top').classList.add("show")
      } else {
        document.body.querySelector('.scroll-top').classList.remove("show")
      }
    })

    const scrollToTop = () => {
      window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
      })
    }

    
    return (
      <>
    <NavBar/>
      <div className='scroll-top' onClick={() => scrollToTop()}><i className="fa-solid fa-arrow-up"></i></div>
    <Routes basename={'/E-commerce-shop'}>
      <Route path='/E-commerce-shop' element={<Home/>}/>
      <Route path='/shop' element={<Shop addToCart={addToCart}/>}/>
      <Route path='/shop/:id' element={<SingleProduct/>}/>
      <Route path='/cart' element={<CartShop cartProducts={cartProducts} setCartProducts={setCartProducts}/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/:id' element={<SingleBlog/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;


