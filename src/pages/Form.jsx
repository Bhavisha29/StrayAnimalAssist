import React from 'react';
import { NavLink } from 'react-router-dom';
import './form.css';

const Form = () => {
  return (
        <div class="container1">
        <div class="screen">
            <div class="screen__content">
            <div className='login-text'><center>Admin Login</center></div>
                <form class="login">
                    <div class="login__field">
                        <input type="text" class="login__input" placeholder="User name / Email"></input>
                    </div>
                    <div class="login__field">
                        <input type="password" class="login__input" placeholder="Password"></input>
                    </div>
                    <NavLink to = '/afterlogin'><button class="button login__submit">
                        <span class="button__text">Log In Now</span>
                        <i class="button__icon fas fa-chevron-right"></i>
                    </button></NavLink>				
                </form>
                </div>
        </div>
    </div>
  )
}

export default Form