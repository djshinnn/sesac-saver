import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { SidebarData } from './SidebarData'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className="nav-text">
              <Link to={item.path}>
                {/* {item.icon} */}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
