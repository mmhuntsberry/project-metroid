import React from "react";

const Login = () => {
    return (
        // Add Css classes and submit button
        <form class="form login-form" action="" method="">
            <div class="container">
                <h1>Log in to Project Metroid</h1>
                
                <label for="email"><b>Email</b></label> 
                <input type="text" placeholder="" name="email" required></input>
                
                <label for="password"><b>Password</b></label> 
                <input type="text" placeholder="" name="password" required></input>
                
                <a href="#">Forgot Password?</a>
            </div>

            <div class="container">
                <span>Don't have an account? <a href="#">Sign up</a></span>       
                <button>LOG IN</button>
            </div>
        </form>
    );
};
export default Login;