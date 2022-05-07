import React from 'react'
import{Link,Outlet} from "react-router-dom"

function Layout() {
  return (
    <div>
        <div className="nav-bar">
        <ul className="nav justify-content-center">
        <li className="nav-item">
        <Link className="nav-link" to="/userdetails">UserDetails</Link> 
        </li>
        </ul>
        <Outlet />
    </div>
    </div>
  )
}

export default Layout