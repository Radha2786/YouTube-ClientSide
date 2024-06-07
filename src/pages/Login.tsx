import React from 'react'
import {Loginform as LoginComponent} from "../components/index.ts"

function Login() {
  return (
    <div className='flex justify-center gap-3 bg-black py-4'>
      <LoginComponent/>
    </div>
  )
}

export default Login