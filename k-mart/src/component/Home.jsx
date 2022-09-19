import React from 'react';
import Navbar from './Navbar';
const Home = () => {
    return(
 <div className='hero'>
  <Navbar />
 <div class="card bg-dark text-white border-0">
  <img src="/assets/bg.jpeg" class="card-img" alt="background" height="550px"/>
  <div class="card-img-overlay">
    <h5 class="card-title display-3 fw-bolder mb-0">WELCOME TO KISAN-MART</h5>
    <p class="card-text lead fs-2">CHECK  OUT ALL THE PRODUCTS</p>
   
  </div>
</div>
 </div>
    );
}

export default Home;