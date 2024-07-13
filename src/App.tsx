import {useState, useEffect} from 'react'
// import Container from "./components/Container/Container"
// import LoginForm from "./components/Forms/Login-form"
import {Header, Signupform, PageHeader} from "./components/index.ts"
import { getCurrentUserService } from './services/user.service.ts'
// import {login, logout} from './features/authSlice'
import { Outlet } from "react-router-dom";
import useAuth from './hooks/useAuth.ts'
import { LoaderCircle } from 'lucide-react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const {login , logout } = useAuth();

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
    getCurrentUserService().then((user)=>{
      if(user){
        login(user);
      }else{
        logout();
      }      
    }).finally(()=> setLoading(false));
  },[])

  return !loading ? (
    <div className="max-h-screen flex flex-col bg-black text-white">
        {/* <Header/> */}
        <PageHeader/>
        <main>
          <Outlet/>
        </main>
    </div>
  ) :
  <div className='flex flex-col justify-center items-center h-screen bg-black text-white'>
      <LoaderCircle className='animate-spin' width={30} height={30} />
  </div>
}

export default App
