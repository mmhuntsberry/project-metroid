import React from "react";
import {LoginForm, LoginContainer, LoginTitle, LoginLabel, LoginInput, LoginAction, LoginText, LoginButton} from "./Login.styles";
const Login = () => {
    return (
        // Add Css classes and submit button
        <LoginContainer>
            <LoginForm class="form login-form" action="" method="">
                <LoginTitle>Log in to Project Metroid</LoginTitle>

                <LoginLabel for="email">Email</LoginLabel> 
                <LoginInput type="text" placeholder="" name="email" required></LoginInput>

                <LoginLabel for="password">Password</LoginLabel> 
                <LoginInput type="text" placeholder="" name="password" required></LoginInput>

                <LoginAction href="#">Forgot Password?</LoginAction>

                <LoginText>Don't have an account? <LoginAction href="#">Sign up</LoginAction></LoginText>       
                <LoginButton type="submit" value="Log in" ></LoginButton>      
            </LoginForm>
        </LoginContainer>
        
    );
};
export default Login;