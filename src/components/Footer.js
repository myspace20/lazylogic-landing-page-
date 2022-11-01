import React from 'react'
import { FiClock,FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookSquare,FaInstagram,FaLinkedin,FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Footer() {
  return (
    <footer>
        {/* <div className='footer-header'>
            <h2>LazyLogic</h2>
            <p>At LazyLOgic, we do the impossible</p>
        </div> */}
        <div className='working-days'>
            <FiClock style={{fontSize:'30px', color:'#ff1800'}}/>
                <h2>Hours</h2>
                <p>Monday - Friday</p>
                <p>9AM - 5PM</p>
        </div>
        <div className='address'>
            <FiMapPin style={{fontSize:'30px', color:'#ff1800'}}/>
            <h2>Locate Us</h2>
            <p>Tetteh Quarshie Ave</p>
            <p>Adabraka, Accra</p>
            <p>GA-074-3179</p>
        </div>
        <div className='contact-us'>
            <FiPhone style={{fontSize:'30px', color:'#ff1800'}}/>
            <h2>Contact Us</h2>
                <p>Phone</p>
                <p>+233247290611</p>
                <p>+233504244608</p>
                <p>Email</p>
                <p>info@lazylogiclimited.com</p>
        </div>
        <div className='social-media'>
            <h2>Let's connect</h2>
            <a href='https://facebook.com/lazylogiclimited' >
                <FaFacebookSquare style={{fontSize:'30px', color:'blue'}}/>
            </a>
            <a href='https://www.instagram.com/lazylogiclimited/'>
                 <FaInstagram style={{fontSize:'30px', color:'purple'}}/>
            </a>
            <a href='https://www.linkedin.com/company/lazylogic-limited/about/'>
                <FaLinkedin style={{fontSize:'30px', color:'blue'}}/>
            </a>
            <a href='https://twitter.com/l_lazylogic'>
                <FaTwitter style={{fontSize:'30px', color:'lightBlue'}}/>
            </a>
        </div>
    </footer>
  )
}

