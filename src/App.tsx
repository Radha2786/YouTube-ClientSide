// import Container from "./components/Container/Container"
// import LoginForm from "./components/Forms/Login-form"
import {Signupform} from "./components/index.ts"


const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* <LoginForm /> */}
      <Signupform/>
    </div>
    
  )
}

export default App
