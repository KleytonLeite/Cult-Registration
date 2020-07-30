import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Menu from '../Menu'

const Layout = ({ children }) => {
  return (
    <div className='m-2 container mx-auto shadow-lg'>
      <Header />
      <Menu />
      <div className='relative h-full'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout