import LoginForm from './login-form.view'
import { useState } from "react";

export default function LoginFormController() {

  const publicKey = (localStorage.getItem('public-key') as HTMLInputElement)
  const privateKey = (localStorage.getItem('private-key') as HTMLInputElement)

  const salvaKey = () => {

    if(publicKey.value && privateKey.value !== '' ){

      localStorage.setItem('public-key', publicKey.value)
      localStorage.setItem('private-key', privateKey.value)

      alert('Keys stored')
    }




  }


  return <LoginForm />
}
