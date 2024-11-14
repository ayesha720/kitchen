import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt velit voluptatem sint ab quibusdam deserunt, maiores voluptate, quisquam, officia recusandae voluptatum expedita libero omnis illo cum quia aspernatur! Fuga.
                    Totam amet provident blanditiis inventore, hic a error mollitia ratione! Id pariatur possimus ducimus accusantium maiores iste aut sunt, reiciendis amet consequatur laborum et ea inventore ad! Minima, est! Dolor?</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt='' />
                        <img src={assets.twitter_icon} alt='' />
                        <img src={assets.linkedin_icon} alt='' />
                    </div>
                </div>
                <div className='footer-content-center'>
                 <h2>COMPANY</h2>
                 <ul>
                <li>Home</li>
                 <li>About Us</li>
                 <li>Delivery</li>
                 <li>Privacy</li>
                 </ul>
                   
                </div>

                <div className='footer-content-right'>
                    <ul>
                        <li>+1-21-456-7865</li>
                        <li>contact@tomato.com</li>
                    </ul>
                   
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved </p>
        </div>
    )
}

export default Footer;