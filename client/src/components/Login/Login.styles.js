import styled from "@emotion/styled";

const LoginForm = styled.form`
    
`;

const LoginContainer = styled.div`
    width: 600px;
    height: 418px;
    color: #e2e2e4;
    background: #212131;
    font-size: 0.95em;
    border-radius: var(--spacing-02); 
    border: 0;
    line-height: 1.5;
    margin:auto;
    padding: 10px 20px;
`;

const LoginTitle = styled.h1`
    font-family: var(--title-font-family-primary);
    font-style: normal;
    font-weight: normal;
    font-size: var(--title-font-size-11);
    line-height: 100%;
    color: var(--green);
    padding-top: var(--spacing-07);
    text-align: center;
`;

const LoginLabel = styled.label`
    font-family: Open Sans; 
    font-style: normal; 
    font weight: normal; 
    font-size: var(--body-font-size-03); 
    line height:100%; 
    color: var(--pink);
`;


const LoginInput = styled.input`
    margin: 8px 0;
    display: inline-block;
    padding: 12px 20px;
    width: 100%;
    height: 40px;
    background: var(--dark-blue);
    border-radius: 15px;
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

const LoginButton = styled.input`
    margin-right: auto;
    border-radius: 5px;
    background-image: var(--color-gradient-right-green); 
    color: var(--grey-01);
    min-width: fit-content;
    padding: 0.625em 1.4375em;
    border: 0;
    font-size: 1.03em;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px #0000001a;
    text-transform: uppercase;
    justify-content: flex-end;
`;

export {LoginForm, LoginContainer, LoginTitle, LoginLabel, LoginInput, LoginAction, LoginText, LoginButton};