import React from 'react'
import teampic1 from '../Lazy Log/Lazy Log (1).jpg'
import teampic2 from '../Lazy Log/Lazy Log (12).jpg'
import teampic4 from '../Lazy Log/Lazy Log (11).jpg'
import teampic5 from '../Lazy Log/Lazy Log (14).jpg'
import understand from '../Lazy Log/Create-bro.svg'
import research from '../Lazy Log/Create-cuate.svg'
import development from '../Lazy Log/Creative team-pana.svg'
import { Carousel } from 'react-responsive-carousel'
import teampic6 from '../Lazy Log/Emma1.jpg'

export default function About() {
  return (
    <section className='welcome-section'>
        <section className='company-profile'>
            <div className='profile'>
                <h2>Company Profile</h2>
                <p>
                LazyLogic Ltd, is a Ghanaian based company with over 10 years’ experience in Web and Graphic Design and Maintenance, Software and Mobile App Development with Digital Marketing Services. With a team of young, goal driven, experienced and vibrant Software Engineers, Web Developers and Data Scientists, our purpose is to create a perfect cross platform solution to satisfy any technological needs of our clients worldwide.
                We offer highly professional quality work tailored to give our clients the premium and satisfactory results they desire
                </p>
            </div>
            <div className='mission'>
                <h2>Mission</h2>
                <p>
                To provide high quality services, and to identify clients needs and match them with appropriate solutions whether for individuals or businesses across the globe
                </p>
            </div>
            <div className='vision'>
                <h2>Vision</h2>
                <p>
                To become the giants in transformational Technology worldwide. 
                </p>
            </div>
        </section>
        <h2>Say hello to our amazing team</h2>
            <Carousel autoPlay={true} infiniteLoop={true}>
                <img src={teampic1} />
                <img src={teampic2} />
                <img src={teampic4} />
                <img src={teampic5} />
                <img src={teampic6} />
            </Carousel>
        <ul className='team-gallery'>
            {/* <li className='team-image'>
                <img src={teampic1} />
            </li>
            <li className='team-image'>
                <img src={teampic2} />
            </li>
            <li className='team-image'>
                <img src={teampic4} />
            </li>
            <li className='team-image'>
                <img src={teampic5} />
            </li> */}
        </ul>
        <section>
            <h2>Our Process</h2>
            <div className='processes'>
                <div className='process'>
                    <img src={understand}/>
                    <h2>Understand</h2>
                    <p>Understanding your ideas and needs is a critical part of our development,
                        We make sure your project is tailored to our services
                    </p>
                </div>
                <div className='process'>
                    <img src={research}/>
                    <h2>Research and Design</h2>
                    <p>
                    To effectively build an application for our clients, we perform extensive research to determine the best approach, the sustainability of those approaches , and existing solutions that can be leveraged for faster and robust development.
                    </p>
                </div>
                <div className='process'>
                    <img src={development}/>
                    <h2>Make and Implement</h2>
                    <p>
                    Our team of developers are specialised in building applications across platforms.
                    </p>
                </div>
            </div>
        </section>
    </section>
  )
}
