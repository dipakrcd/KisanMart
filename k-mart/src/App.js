import Home from './component/Home';
import Cart from './component/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import Product from './Products/Product';
import About from './component/About';
import Contact from './component/Contact';
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          {/* <Route path="/signup/sucess" element={<Sucess/>}></Route> */}
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
