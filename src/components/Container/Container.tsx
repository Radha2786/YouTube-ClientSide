import React from 'react'

interface childrenComponent{
  children: React.ReactNode,
}

const Container: React.FC<childrenComponent> = ({children}) => {
  return (
    <div className='bg-red-300 min-h-full h-screen'>
      {children}
    </div>
  )
}

export default Container
