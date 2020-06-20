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
    border-radius: 4px; 
    border: 0;
    line-height: 1.5;
    align-items: center;
`;

const LoginContainer = styled.div`
`;

const LoginTitle = styled.h1`
    font: var(--title-font-family-primary);
`;

const LoginLabel = styled.label`
`;

const LoginInput = styled.input`
    margin-left: auto;
`;

const LoginAction = styled.a`
`;

const LoginText = styled.span`
`;

const LoginButton = styled.button`
    margin-right: auto;
`;

export {LoginForm, LoginContainer, LoginTitle, LoginLabel, LoginInput, LoginAction, LoginText, LoginButton};