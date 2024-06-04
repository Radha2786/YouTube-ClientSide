import React from 'react'
import {Container, LogoutBtn} from '../index.ts'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  // const authStatus = useSelector((state) => state.auth.status)
  return (
    <div>
      <h1>Header component</h1>
    </div>
  )
}

export default Header
