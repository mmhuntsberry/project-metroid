import styled from "@emotion/styled";

const LoginContainer = styled.div`
    width: 60%;
    color: #e2e2e4;
    background: #212131;
    border-radius: var(--spacing-02); 
    border: 0;
    padding: var(--spacing-08) var(--spacing-10);
    box-sizing: border-box;
    display: block;
    text-align: center;
    margin: auto;
`;

const LoginForm = styled.form`
    display: inline-block;
    margin: 0 auto 0;
    text-align: left;
`;

const LoginTitle = styled.h1`
    font-family: var(--title-font-family-primary);
    font-style: normal;
    font-weight: normal;
    font-size: var(--title-font-size-11);
    line-height: 100%;
    color: var(--green);
    text-align: center;
    margin: var(--spacing-02);
    display: block;
`;

const LoginLabel = styled.label`
    font-family: Open Sans; 
    font-style: normal; 
    font weight: normal; 
    font-size: var(--body-font-size-03); 
    line height:100%; 
    color: var(--pink);
    margin-top: var(--spacing-06);
    display: block;
`;


const LoginInput = styled.input`
    margin: 8px 0;
    display: inline-block;
    padding: 12px 20px;
    width: 100%;
    height: 40px;
    background: var(--dark-blue);
    border-radius: 5px;
    border: 0;
    display: block;
`;

const LoginForgotPassword = styled.a`
    display: block;  
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: var(--body-font-size-02);
    color: var(--grey-03);
    text-decoration: none;
`;

const LoginBottomContainer = styled.div`
    display: inline-block;
    height: auto;
    padding-top: var(--spacing-02)
`;

const LoginText = styled.span`
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: var(--body-font-size-02);
    color: var(--grey-03);
    padding: var(--spacing-02) var(--spacing-04);
    display: inline-block;
    text-align: right;
    margin-top: var(--spacing-02); 
`;

const LoginSignUp = styled.a`
    display: inline-block;  
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: var(--body-font-size-02);
    color: var(--pink);
    text-decoration: none;
`;


const LoginButton = styled.input`
    border-radius: 5px;
    background-image: var(--color-gradient-right-green); 
    color: var(--grey-01);
    min-width: fit-content;
    padding: var(--spacing-02) var(--spacing-04);
    border: 0;
    font-size: 1.03em;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px #0000001a;
    text-transform: uppercase;
    display: inline-block;
    vertical-align: text-bottom;
`;

export {LoginForm, LoginContainer, LoginTitle, LoginLabel, LoginInput, LoginForgotPassword, LoginBottomContainer, LoginText, LoginSignUp, LoginButton};