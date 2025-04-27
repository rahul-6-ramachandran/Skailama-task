import React from 'react';

export default function LandingPage() { 
    return(
        <>
          <div id="landing-container">
      
      <div id="landing-image">
        <div className="logo-container">
          <img id="left-logo" src="/images/QuesLogo 1.png" alt="Logo" />
        </div>
        <div id='header-container' >
            <h3>Your podcast  </h3><br/> <h3>will no longer </h3><br/> <h3>be just a hobby.</h3>
        </div>
        <div id='left-text-container'>
            <p>Supercharge Your Distribution using our AI assistant!</p>
        </div>
        <div id='bottom-image'>
            <img  src="/images/Mask group.png" alt="Logo" />
        </div>
      </div>

      <div id="register-container">
       <div id='right-logo-container'>
            <img src="/images/Group 22.png" alt="" />
            <div id='text-container'>
            <span id='welcome-text'>Welcome To</span>
            <span id='name'>Ques.AI</span>
            </div>
       </div>
       <div id='register-form-container'>
            <form action="">
                <div id='input-container'>
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                   <div id='checkbox-container'>
                   <input type="checkbox" placeholder='Password' />
                    <span id='remember-me'>Remember me</span>
                    <a href="Forgot Password">Forgot Password</a>

                   </div>
                </div>
         
                <button id='register-button'>Register</button>
            </form>
        
       </div>
      </div>


    </div>
        </>
    )
}