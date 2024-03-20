import React, { useState } from 'react'
import "./AuthCss.css";
import axios from 'axios';
import { useNavigate } from 'react-router';

export const Auth = () => {

    const [uname,setUname]=useState("");
    const [upass,setUpass]=useState("");
    const [uemail,setUemail]=useState("");

    const nav=useNavigate();

    const signin=(e)=>{
            e.preventDefault();

            const uuemail=document.getElementById("uuemail")
            const uupass=document.getElementById("uupass")
    //    e.target.preventDefault();

        console.log("suiiiiiiiiiiiiiii");
        console.log(uuemail.value);
        console.log(uupass.value);

        axios.get("http://localhost:9090/login")
            .then((response) => {
                console.log(response);
                for (let arrElement of (response.data)) {
                  console.log(arrElement.uEmailId);
                  console.log(arrElement.uPass);
                    if ((arrElement.uEmailId === (uuemail.value)) && (arrElement.uPass === (uupass.value))) {
                        alert("Login successful 😀😀..");
                        console.log("Successful");
                       
                            nav("/home");
                       
                        
                        // Navigate to the "/home" route upon successful login
                        return;
                    }
                }
                alert("Enter valid name or password");
               
            })
            .catch((error) => {
                console.log("Error:", error);
                alert("An error occurred while logging in. Please try again later.");
 });
    };

    const signup=(e)=>{

        e.preventDefault();

        console.log("suiii==================");
    
        const user = {
            uName: uname,
            uPass: upass,
            uEmailId:uemail
        };

        console.log(user);

        axios.post("http://localhost:9090/signup", user)
            .then((response) => {
                console.log(response);
                alert("Sign-up successfully");
            })
            .catch((error) => {
                console.log(error);
                console.log("Error occurred while signing up");
            });
    };


  return (
        <>

<div className="auth-container">
        <div className='sign-up'>
          <div className='signup-container'>
            <form onSubmit={signup}>
            <h1>Sign up</h1>
              <input className='form-input' type='text' placeholder='Enter your name'  onChange={(e)=>{
                setUname(e.target.value)
              }}/>
              <input className='form-input' type='password' placeholder='Enter your password' onChange={(e)=>{
                setUpass(e.target.value)
              }}/>
              <input className='form-input' type='email' placeholder='Enter your email' onChange={(e)=>{
                setUemail(e.target.value)
              }}/>
              <button  type='submit' className='form-button'>Sign Up</button>
            </form>
          </div>
        </div>

        <div className='sign-in'>
          <div className='signin-container'>
            <form onSubmit={signin}>
            <h1>Sign In</h1>
            <input className='form-input' type='email' id='uuemail' placeholder='Enter your email'  onChange={(e)=>{
                setUemail(e.target.value)}}/>

              <input className='form-input' type='password' id='uupass' placeholder='Enter your password'  onChange={(e)=>{
                setUpass(e.target.value)
              }} />
              
              <button type='submit' className='form-button'>Sign In</button>
            </form>
          </div>
        </div>
      </div>


        </>

  );
}
