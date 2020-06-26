import styled from "@emotion/styled";

const LoginForm = styled.form`
    width: 600px;
    position: absolute;
    height: 418px;
    display: flex;
    color: #e2e2e4;
    background: #212131;
    margin: 0 auto;
    padding: 0 1.5em;
    font-size: 0.95em;
    border-radius: 5px; 
    border: 0;
    line-height: 1.5;
    align-items: center;
`;

const LoginContainer = styled.div`
`;

const LoginTitle = styled.h1`
    font-family: var(--title-font-family-primary);
    font-style: normal;
    font-weight: normal;
    font-size: var(--title-font-size-11);
    line-height: 100%;
    display: flex;
    align-items: center;
    color: var(--green);
`;

const LoginLabel = styled.label`
    font-family: Open Sans; 
    font-style: normal; 
    font weight: normal; 
    font-size: var(--body-font-size-03); 
    line height:100%; 
    display: flex;
    align-items: center;
    color: var(--pink);
`;


const LoginInput = styled.input`
    margin-left: auto;
    width: 382px;
    height: 40px;
    background: var(--dark-blue);
    border-radius: 5px;
`;

const LoginAction = styled.a`
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: var(--body-font-size-01);
    line-height: 12px;
    color: var(--pink);  
`;

const LoginText = styled.span`
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: var(--body-font-size-01);
    line-height: 12px;

    color: var(--grey-03);
`;

const LoginButton = styled.button`
    margin-right: auto;
    border-radius: 5px;
    background: var(--color-gradient-right-green), var(--grey-01);
`;

export {LoginForm, LoginContainer, LoginTitle, LoginLabel, LoginInput, LoginAction, LoginText, LoginButton};