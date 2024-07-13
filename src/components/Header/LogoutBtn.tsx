import React from 'react'
import {logoutService} from '../../services/user.service.ts'
import { Button } from "@/components/ui/button"
import useAuth from '@/hooks/useAuth.ts'

const LogoutBtn = () => {
    const {logout} = useAuth();

    const logoutHandler = async () => {
        try{
          await logoutService().then(()=> logout());
          localStorage.removeItem('accessToken');
        } catch(error:any){
            console.log("Error while logout", error.message);
        }
    }
  return (
    <div>
      <Button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'  onClick={logoutHandler}>Logout</Button>
    </div>
  )
}

export default LogoutBtn
