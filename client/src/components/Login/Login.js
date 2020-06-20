import React from "react";
import {LoginForm, LoginContainer, LoginTitle, LoginLabel, LoginInput, LoginAction, LoginText, LoginButton} from "./Login.styles";
const Login = () => {
    return (
        // Add Css classes and submit button
        <LoginForm class="form login-form" action="" method="">
            <div class="container">
                <LoginTitle>Log in to Project Metroid</LoginTitle>
                
                <label for="email">Email</label> 
                <LoginInput type="text" placeholder="" name="email" required></LoginInput>
                
                <label for="password">Password</label> 
                <LoginInput type="text" placeholder="" name="password" required></LoginInput>
                
                <a href="#">Forgot Password?</a>
                
                <span>Don't have an account? <a href="#">Sign up</a></span>       
                <LoginButton>LOG IN</LoginButton>
            </div>
        </LoginForm>
    );
};
export default Login;