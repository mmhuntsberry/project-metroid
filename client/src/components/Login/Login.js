import React from "react";
import {LoginForm, LoginContainer, LoginTitle, LoginLabel, LoginInput, LoginForgotPassword, LoginSignUp, LoginBottomContainer, LoginText, LoginButton} from "./Login.styles";
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

                <LoginForgotPassword href="#">Forgot Password?</LoginForgotPassword>

                <LoginBottomContainer>
                    <LoginText>Don't have an account? </LoginText>       
                    <LoginSignUp href="#">Sign up</LoginSignUp>
                    <LoginButton type="submit" value="Log in"></LoginButton>
                </LoginBottomContainer>
                      
            </LoginForm>
        </LoginContainer>
        
    );
};
export default Login;