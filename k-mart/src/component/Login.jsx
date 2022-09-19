import React from 'react'
import {MDBContainer,MDBInput,MDBCheckbox,MDBBtn,  MDBIcon} from 'mdb-react-ui-kit';
import Navbar from './Navbar'
import { useState } from 'react';
import { login } from '../services/UserService'
function Login() {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  function handleSubmit(){
    login(email,password)

  }


  return (
    <MDBContainer fluid>
    <Navbar/>
  <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
  <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 " >Log in</p>
    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(event) => {
                            setEmail(event.target.value);
                        }}/>
    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(event) => {
                            setPassword(event.target.value);
                        }}/>

    <div className="d-flex justify-content-between mx-3 mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <MDBBtn className="mb-4" onClick={handleSubmit}>Sign in</MDBBtn>

    <div className="text-center">
      <p>Not a member? <a href="Signup">Register</a></p>
      <p>or sign up with:</p>

      <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='facebook-f' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='twitter' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='fa-fa-google' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='fa fa github' size="sm"/>
        </MDBBtn>

      </div>
    </div>

  </MDBContainer>
  </MDBContainer>
  )
}

export default Login