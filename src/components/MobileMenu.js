import  React from 'react'
import ReactDOM  from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import { FiX } from "react-icons/fi";

export default function MobileMenu({handleMenu}) {

    const navigate =useNavigate()
    
  return ReactDOM.createPortal ((
         <div className='mobile-menu'>
            <FiX style={{fontSize:'50px', color:'lightGray',
            position:'absolute',right:'0'}}
             onClick={handleMenu}/>
            <ul className='mobile-links'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about' >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to='/contact' >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
  ),document.body)
}
