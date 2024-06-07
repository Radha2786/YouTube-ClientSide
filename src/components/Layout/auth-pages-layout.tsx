import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/store/store';

interface AuthPage {
    children: React.ReactNode;
    className?: string;
    authentication?: boolean;
}

const AuthPageLayout : React.FC<AuthPage> = ({children , className, authentication=true}) => {
  const navigate = useNavigate();
  const [loader , setLoader] = useState(true);
  const authStatus = useSelector((state: RootState) => state.auth.status)
  useEffect(()=>{
    if(authentication &&  authStatus!==authentication){
      console.log(authStatus);
      navigate('/login');
    }else if(!authentication && authStatus!==authentication){
      navigate('/');
    }
    setLoader(false);
  },[authStatus, authentication, navigate])
  return (
    <div className={`${className}`}>
      <div>
      {loader ? <h1>Loading...</h1> : 
      <>
      {children}
      </>
      }
      </div>

    </div>
  )
}

export default AuthPageLayout;
