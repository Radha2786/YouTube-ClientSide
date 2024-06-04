import React from 'react'
import { Button } from "@/components/ui/button"

import {Signupform as SignupComponent} from "../components/index.ts"
import AuthPageLayout from '@/components/Layout/auth-pages-layout.tsx'
import { Navigate } from 'react-router-dom'



function Signup() {
  return (
    // <div className='py-8'>
    //   <SignupComponent/>
    // </div
    <AuthPageLayout>
      <h1>SignUp</h1>
      <SignupComponent/>
      <div>
        <p> Already have an account 
        <Button onClick={()=>{
          <Navigate to='/login'/>
        
        } }>LogIn</Button>
        </p>
      </div>
    </AuthPageLayout>
  )
}

export default Signup