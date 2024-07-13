import React from 'react'
import { useDispatch } from 'react-redux'
import {logoutService} from '../../services/user.service.ts'
import {logout} from '../../features/authSlice'
import { Button } from "@/components/ui/button"
const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = async () => {
        try{
          await logoutService();
          dispatch(logout());
          localStorage.removeItem('accessToken');
        } catch(error:any){
            console.log("Error while logout", error.message);
        
        }
    }
  return (
    <div>
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  )
}

export default LogoutBtn
