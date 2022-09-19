import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { signUp } from '../services/UserService'
// import{  useNavigate } from 'react-router-dom'

function Signup() {
    // const navigate= useNavigate();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [address, setAddress] = useState("");
    function handleSubmit() {
        const user = {
            userFirstName: fname,
            userLastName: lname,
            userEmailId: email,
            password: password,
            mobileNo: mobileNo,
            address: address,
            role: "USER"
        }
        signUp(user).then((resp) => {
            console.log("suceess")
        }).catch((error) => {
            console.log("error")
        })
       
    }
   
    return (

        <div>
            <Navbar />
            <div className="register-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <br></br>
                    <h1>Register</h1>
                    <p>Fill in the Information Below</p>

                    <input type="text" name="FirstName" placeholder="FirstName"
                        onChange={(event) => {
                            setFname(event.target.value);
                        }} />
                    <br />
                    <input type="text" name="LastName" placeholder="LastName"
                        onChange={(event) => {
                            setLname(event.target.value);
                        }} />
                    <br />
                    <input type="text" name="Email" placeholder="Email"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }} />
                    <br />
                    <input type="text" name="Password" placeholder="Password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                    <br />
                    <input type="text" name="MobileNo" placeholder="MobileNo"
                        onChange={(event) => {
                            setMobileNo(event.target.value);
                        }} />
                    <br />
                    <input type="text" name="Address" placeholder="Address"
                        onChange={(event) => {
                            setAddress(event.target.value);
                        }} />
                    <br />
                    <br />
                    <button type="submit">Register</button>
                </form>
                <div id="message">

                </div>

            </div>

        </div>
    )
}

export default Signup