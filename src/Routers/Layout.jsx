import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
    <nav style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="/home">Home</Link>
      <Link to="/aboutMe">About Me</Link>
      <Link to="/galery">Galery</Link>

    </nav>
    <Outlet />
  </>
  )
}

export default Layout;