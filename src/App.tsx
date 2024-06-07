// import Container from "./components/Container/Container"
// import LoginForm from "./components/Forms/Login-form"
import {Footer, Header, Signupform} from "./components/index.ts"
import React , {useState, useEffect} from 'react'
// import {useDispatch} from 'react-redux'
// import {login, logout} from './features/authSlice'
import { Outlet } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();

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

  useEffect(() => {
    setLoading(false);
  }, []);

  return !loading ? (
    <div className="min-h-screen  bg-black text-white overflow-hidden">
      <div className="">
        <Header/>
        <main>
          <Outlet/>
        </main>
        {/* <Footer/> */}
      </div>

    </div>
  ) : 
  (
  <h1>Loading...</h1>
  )
}

export default App
