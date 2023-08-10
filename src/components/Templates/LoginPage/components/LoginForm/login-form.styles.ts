import { styled } from 'styled-components';

export const StyledLoginForm = styled.div`
    background-color: ${props => props.theme.palette.primary};
    color: ${props => props.theme.palette.text};
    display: inline-block;
    padding: 0 100px;
    margin-top: 200px;
    position: relative;
    border: 2px solid #000;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-title {
        font-size: 48px;
    }

    .login-label {
        font-size: 36px;
        padding-bottom: 2px;
    }

    .login-input {
        width: 100%;
        position: relative;
        border: 1px solid #000;
        border-radius: 2px;
        padding: 8px;
    }

    .login-button {
        background-color: ${props => props.theme.palette.secondary};
        border: 1px solid #000;
        padding: 4px 16px;
        font-size: 20px;
        margin-top: 12px;
    }
`