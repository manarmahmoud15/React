import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header/>
      <div className='container my-5'>
      <Outlet/>
      </div>
    </>
  
  )
}
