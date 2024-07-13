import React , {useState, useEffect} from 'react'
// import Container from "./components/Container/Container"
// import LoginForm from "./components/Forms/Login-form"
import {Footer, Header, Signupform} from "./components/index.ts"
import { loginService } from './services/user.service.ts'

import {useDispatch} from 'react-redux'
import {login, logout} from './features/authSlice'
import { Outlet } from "react-router-dom";
import useAuth from './hooks/useAuth.ts'

const App = () => {
  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch();

  const {isAuthenticated, userData} = useAuth();

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   if(accessToken){
  //     dispatch(login());
  //   } else {
  //     dispatch(logout());
  //   }
  //   setLoading(false);
  // }, [dispatch]);
  // return (
    // <div className="flex flex-col items-center justify-center h-screen bg-white">
    //   {/* <LoginForm /> */}
    //   <Signupform/>
    //   <h1>Welcome to our YouTube Application</h1>
    // </div>
    
    
  // )  

  useEffect(()=>{
    if(isAuthenticated){
      if(userData){
        dispatch(login(userData));
      }else{
        dispatch(logout())
      }  
    }
    setLoading(false);
  },[])

  return !loading ? (
    
    <div className="min-h-screen flex flex-wrap content-between bg-black text-white">
      <div className="w-full-block">
        <Header/>
        <main>
          <Outlet/>
          <h1>Hurray</h1>
        </main>
        <Footer/>
      </div>

    </div>
  ) : <h1>Loadinggg....</h1>
}

export default App
