import styled from "@emotion/styled";

const LoginForm = styled.form`
    width: 600px;
    height: 418px;
    display: block;
    color: #e2e2e4;
    background: #212131;
    margin: auto;
    font-size: 0.95em;
    border-radius: var(--spacing-02); 
    border: 0;
    line-height: 1.5;
`;

const LoginContainer = styled.div`
    margin: auto;
    padding: var(--spacing-09) var(--spacing-10);
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
    margin: var(--spacing-02) 0;
    padding: var(--spacing-03) var(--spacing-05);
    width: calc(100% - 2em);
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