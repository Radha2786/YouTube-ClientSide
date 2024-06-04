import React from 'react'

interface AuthPage {
    children: React.ReactNode;
    className?: string;
}

const AuthPageLayout : React.FC<AuthPage> = ({children , className}) => {
  return (
    <div className={`border-2 border-sky-500 ${className}`}>
      {children}
    </div>
  )
}

export default AuthPageLayout;
