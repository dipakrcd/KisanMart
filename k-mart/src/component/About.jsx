import React from 'react'
import Navbar from './Navbar'
import './About.css';
import { MDBContainer, MDBRow, MDBCol, } from 'mdb-react-ui-kit';


function About() {
  return (
    <div className='main'>
      <MDBContainer fluid>
      <Navbar/>

       <MDBRow className='mb-3 text-center d-flex align-items-center bg_about'>
          <h1><b>welcome to the k mart</b></h1>
       </MDBRow>
       <MDBRow className='mb-3 text-center d-flex align-items-center '>
           <MDBCol size="5">
                <h1>Who are we </h1>
                <h3>What is our mission?</h3>
           </MDBCol>
           <MDBCol size="5">
               <p>
               We strive to achieve perfection in what we do.
                We connect with the farmers directly and 
                We ensure that we serve the best quality to our esteemed customers.
                 Our mission is to be a one stop that delivers on time every time.
                  We source fresh vegetables from farmers and deliver them 
                  to businesses like Retailers, Wholesalers, Restaurants, Food Processors,
                   and Institutional Customer / Canteens.
               </p>
           </MDBCol>
       </MDBRow>

       <MDBRow className='mb-3 text-center d-flex align-items-center '>
           <MDBCol size="5">
                <h1>Why choose us </h1>
                <h3>How are we the best?</h3>
           </MDBCol>
           <MDBCol size="5" >
               <p>
               It’s not just any business for us.
                We have our focus on helping the farmers and bridge the gap between the producer and the buyer.
                 The farmers are assured of the money without having to wait for customers to sell their produce.
                  On the other hand, we ensure that our customers are delivered fresh produce by taking care of the food miles
                   and making a positive impact on the environment leaving less carbon footprint. Fresh Vegetables, every day,
                    directly from Farmers to Customers! Our core value guides us in how we place ourselves to help Farmers and our Customers.
                     We offer our customers the assurance of fresh vegetables, fruits and Meat at wholesale price.
               </p>
           </MDBCol>
       </MDBRow >

      
<MDBRow>

<div class="container pt-5 my-5 z-depth-1">
  <section class="p-md-3 mx-md-5 text-center text-lg-left">
    <h2 class="text-center mx-auto font-weight-bold mb-4 pb-2"><u>Our Team</u></h2>
    <p>We are a team of your and like minded people who have come together with a purpose of givingback to the farmers <br></br>
             who are the unspoken heroes. We wanted to support them and help 
            them sell their produce.<br></br> 
            We created a supply chain so that we buy the products from <br></br>them and sell to the end customers.</p>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="p-4">
          <div
            class="avatar w-100 white d-flex justify-content-center align-items-center"
          >
            <img
              src="./assets/m1.png"
              class="img-fluid rounded-circle z-depth-1"
            />
          </div>
          <div class="text-center mt-3">
            <h6 class="font-weight-bold pt-2">Alan Turing</h6>
            <p class="text-muted">
              <small
                ><i
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</i
                ></small
              >
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="p-4">
          <div
            class="avatar w-100 white d-flex justify-content-center align-items-center"
          >
            <img
              src="./assets/m1.png"
              class="img-fluid rounded-circle z-depth-1"
            />
          </div>
          <div class="text-center mt-3">
            <h6 class="font-weight-bold pt-2">Nathalie Fry</h6>
            <p class="text-muted">
              <small
                ><i
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</i
                ></small
              >
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="p-4">
          <div
            class="avatar w-100 white d-flex justify-content-center align-items-center"
          >
            <img
              src="./assets/m1.png"
              class="img-fluid rounded-circle z-depth-1"
            />
          </div>
          <div class="text-center mt-3">
            <h6 class="font-weight-bold pt-2">Billy Turner</h6>
            <p class="text-muted">
              <small
                ><i
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</i
                ></small
              >
            </p>
          </div>
        </div>
      </div>
      
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="p-4">
          <div
            class="avatar w-100 white d-flex justify-content-center align-items-center"
          >
           
            <img
              src="./assets/m1.png"
              class="img-fluid rounded-circle z-depth-1"
            />
            
          </div>
          <div class="text-center mt-3">
            <h6 class="font-weight-bold pt-2">Veronica Smith</h6>
            <p class="text-muted">
              <small
                ><i
                  >Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</i
                ></small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</MDBRow>
      
      
  
      

        
      </MDBContainer>
     
        
    </div>
  );
}

export default About