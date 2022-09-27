import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './navbar.css';

const links = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    id: 2,
    title: 'Cars',
    path: '/cars',
    icon: <AiIcons.AiFillCar />,
    cName: 'nav-text',
  },
  {
    id: 3,
    title: 'car details',
    path: '/car_details',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
];

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="/" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.id} className={link.cName}>
                <Link to={link.path}>
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;