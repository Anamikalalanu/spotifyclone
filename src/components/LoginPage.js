import React from 'react'
import '../style/LoginPage.css'
import { Link } from 'react-router-dom'


export default function LoginPage() {
  return (
    <div>


<img className="main-logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"/>


<div className="main"></div>
  

 
 <div className="logo">
  <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"/>
</div>
  
  <div className="sign-box">
    <p>sign in</p>
    <p>sign up</p>
  </div>
  
    <span id="msg"></span>
  
  <input type="name" placeholder="Username" className="inp-Box name"/>
  
  <br/>
  
 <input type="password" placeholder="Password" className="inp-Box psd"/>
  
  <br/>
  
  <div className="check">
    <input type="checkbox" id="check"/>
    <label for="check" id="checkMsg">stay signed in</label>
  </div>
<Link to='/facepage'>
  <input type="submit" value="sign in" className="inp-Box submit"/>
  </Link>
  
  <p className="forgot-Psd">forgot password?</p>



<p className="note">Please log in to listen to your favorite song...</p>
      
    </div>
  )
}
