import React from 'react'
import {Link} from 'react-router-dom';
import './style.css';
const Header = () => {
  return (
    <div>
        <span className="header">React Context API </span>
        <ul className='nav'>
        <li className='prod'>
            <Link to='/'>Home Page</Link>   
        </li>
        <li classname="prod1">
            <Link to='/'> Cart</Link>
        </li>
        </ul>
    </div>
  )
}

export default Header