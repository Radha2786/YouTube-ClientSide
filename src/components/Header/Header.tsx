import {Container, Logo, LogoutBtn} from '../index.ts'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import  useAuth  from '@/hooks/useAuth.ts'

const Header = () => {
  // const authStatus = useSelector((state) => state.auth.status)
  const {isAuthenticated} = useAuth();
  const navigate = useNavigate();
  const navItems = [
    {
      name: 'Login',
      slug: '/login',
      active: !isAuthenticated
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !isAuthenticated
    },
    {
      name: 'Logout',
      slug: '/',
      active: isAuthenticated
    },
  ]
  return (
    <header className='py-3 shadow bg-fuchsia-100'>
      <Container>
        <nav className='flex'>
          <div>
            <Link to='/'>
            <Logo width='70px'/>
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {
              navItems.map((item, index) => item.active?(
                  <li key={index}>
                   <button onClick={()=> navigate(item.slug)} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>{item.name}</button>
                  </li>
                ):null)}
                {isAuthenticated && 
                <li>
                <LogoutBtn/>
                </li>
                }
          </ul>

        </nav>
      </Container>

      </header>
  )
}

export default Header
