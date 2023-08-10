import { StyledLoginForm } from "./login-form.styles";

export default function LoginForm() {
  return (
    <StyledLoginForm>
        <h2 className="login-title">Marvelist</h2>
        <form className="login-form" action="submit">
            <label className="login-label">Public Key</label>
            <input className="login-input" type="text" id="public-key" placeholder="Insert your public key here..." required/>
            <label className="login-label">Private Key</label>
            <input className="login-input" type="text" id="private-key" placeholder="Insert your private key here..." required/>
            <button className="login-button" type="submit">Submit</button>
        </form>
        <div>
            <p>Access Marvel API website to have a insight of how to get this keys.</p>
        </div>
    </StyledLoginForm>
  )
}
