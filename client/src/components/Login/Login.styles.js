import styled from "@emotion/styled";

const LoginContainer = styled.div`
    width: 60%;
    color: #e2e2e4;
    background: #212131;
    border-radius: var(--spacing-02); 
    border: 0;
    padding: var(--spacing-08) var(--spacing-10);
    box-sizing: border-box;
    
`;

const LoginForm = styled.form`
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

const LoginAction = styled.a`
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: var(--body-font-size-01);
    line-height: 12px;
    color: var(--pink);
    display: inline-block;  
`;

const LoginText = styled.span`
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: var(--body-font-size-02);
    line-height: 12px;
    color: var(--grey-03);
    padding: var(--spacing-02) var(--spacing-04);
    display: block;
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
`;

export {LoginForm, LoginContainer, LoginTitle, LoginLabel, LoginInput, LoginAction, LoginText, LoginButton};