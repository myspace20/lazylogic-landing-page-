import React, { useEffect } from 'react'
import heroImage from '../Lazy Log/Lazy Log (2).jpg'
import aday from '../Lazy Log/Lazy Log (7).jpg'
import team from '../Lazy Log/Lazy Log (12).jpg'
import peoplesPay from '../Lazy Log/peoplespay1.png'
import websoft from '../Lazy Log/websoft.jpg'
import golden from '../Lazy Log/golden.png'
import wisconsin from '../Lazy Log/wisconsin.png'
import { FaWindows, FaAppStoreIos, FaAndroid } from "react-icons/fa";
import { CiDesktop } from "react-icons/ci";
import { AiFillAndroid } from "react-icons/ai";
import { IoLogoApple } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import design from '../Lazy Log/Web.png'
import web from '../Lazy Log/gre.png'
import mobile from '../Lazy Log/moble.png'






export default function Home() {

 

  return (
    <section className='home'>
        <section className='hero-section'>
            <div className='hero-leading-text'>
                <h2>
                Choose LazyLogic
                </h2>
                <span>"We do the impossible"</span> 
                <p>
                    We provide our clients with reliable and affordable software solutions through a thoughtful and meticulous development process.
                </p>
                <div className='hero-get-in-touch'>
                    <Link to='/contact' >
                    <button>Get in touch</button>
                    </Link>
                </div>
            </div>
            <div className='hero-image'>
                <Carousel autoPlay={true} infiniteLoop={true}>
                <img src={heroImage}/>
                <img src={team}/>
                </Carousel>
            </div> 
        </section>
        <section className='clients'>
            <h2>Our Happy Customers</h2>
            <ul className='clients-list'>
                <li className='client-details'>
                    <img src={peoplesPay} />
                </li>
                <li className='client-details'>
                    <img src={websoft} />
                </li>
                <li className='client-details'>
                    <img src={golden} />
                </li>
                <li className='client-details'>
                    <img src={wisconsin} />
                </li>
            </ul>
            <h3>And many more</h3>
        </section>
        <section className='services'>
            <h2>We provide Software Solutions for the most widely used Platforms</h2>
            <ul className='service-list'>
                <li>
                    <img src={web} style={{width:'100px', color:'#FF1800'}}/>
                    <p>Web</p>
                </li>
                <li>
                    <IoLogoApple style={{fontSize:'100px', color:'grey'}}/>
                    <p>iOS</p>
                </li>
                <li>
                    <AiFillAndroid style={{fontSize:'100px', color:'green'}}/>
                    <p>Android</p>
                </li>
                <li>
                    <FaWindows style={{fontSize:'100px', color:'Blue'}}/>
                    <p>Windows</p>
                </li>
            </ul>
            <div className='services-get-in-touch'>
                <Link to='/contact' >
                    <button>Get in touch</button>
                </Link>
            </div>
        </section>
        <section className='servicespage'>
            <h1>Services</h1>
            <ul className='servicepage-list'>
                <li className='service-card'>
                    <img src={web} style={{width:'80px', color:'#FF1800'}}/>
                    <p>Web Development</p>
                </li>
                <li className='service-card'>
                    <img src={mobile} style={{width:'80px', color:'#FF1800'}}/>
                    <p>Mobile Development</p>
                </li>
                <li className='service-card'>
                    <img src={design} style={{width:'80px', color:'#FF1800'}}/>
                    <p>Communication Design</p>
                </li>
            </ul>
            {/* <a href="https://www.vecteezy.com/free-vector/web">Web Vectors by Vecteezy</a> */}
        </section>
        <section className='a-day-in-the-life'>
            <h2>A day in the life at LazyLogic</h2>
            <div className='a-day-content'>
                <div className='day-in-image'>
                    <Carousel>
                        <img src={aday} />
                    </Carousel>
                </div>
                <div className='day-in-text'>
                    <p>Understanding your ideas and needs is a critical part of our development process.
                    We work in teams to ensure that the best and state-of-the-art techniques are employed to deliver excellent results on a daily basis.
                    </p>
                    <div className='meet-the-team'>
                        <Link to='/about'>
                            <button>Meet the team</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </section>
   
  )
}
