import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/balkan-logo.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import gmail from '../../assets/images/gmail.png'

const Footer = () => {
    return (
        <>
            <div className='footer m-0 py-5'>
                <div className='footer-col'>
                    <div className='footer-col-logo'>
                        <div className='col-3'>
                            <div className='logo'>
                                <img src={logo} className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='description'>
                                <p>
                                    Balkan Promises - The Premier Youth Football Tournament!
                                    <br />
                                    Join us at Balkan Promises, where top young talents from the Balkans and beyond compete in a celebration of sportsmanship and excellence. 
                                    Experience thrilling matches, cultural exchanges, and the future stars of football. 
                                    Explore our site for tournament details, team info, and how to get involved. 
                                    Celebrate the future of football with us!
                                </p>
                            </div>
                            <div className='socials'>
                                <Link className='icon' to="https://www.facebook.com/profile.php?id=100085707533502" target='_blank'><img src={facebook} className='img-fluid' /></Link>
                                <Link className='icon' to="https://www.instagram.com/balkan_promises/"><img src={instagram} className='img-fluid' /></Link>
                                <Link className='icon' to="mailto:balkan.promises@gmail.com"><img src={gmail} className='img-fluid' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-col'>
                    <h3>Pages</h3>
                    <div className='pages'>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/tournament">Tournament</Link>
                        <Link className='link' to="/about">About</Link>
                        <Link className='link' to="/contact">Contact</Link>
                    </div>
                </div>
                <div className='footer-col'>
                    <h3>Staff</h3>
                    <div className='contact'>
                        <p>AGRON MERKO</p>
                        <p>Tournament President</p>
                        <Link to="tel:+38978341646">+38978341646</Link>
                        <hr />
                        <p>MITKO STOJANOSKI</p>
                        <p>Director of the Tournament</p>
                        <hr />
                        <p>PAVLI BUNECI & YOUNG STARS TOURNAMENTS</p>
                        <p>Coordinator for Albania | Kosova | Montenegro | Greece</p>
                        <Link to="tel:+355674911775">+ 355 67 491 1775 </Link> &nbsp;&nbsp; : &nbsp; <Link to="tel:+355693381633">+355 69 338 1633</Link>
                    </div>
                </div>
            </div>
            <div className='madeBy'>
                <p>© Çelik Hasanaj, 2024, All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;
