import LoginFormController from "./components/LoginForm/login-form.controller";
import { StyledLoginPage } from "./login-page.styles";

export default function LoginPage () {
    return (
        <StyledLoginPage>
            <LoginFormController/>
        </StyledLoginPage>
    )
}