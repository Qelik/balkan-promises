import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/balkan-logo.webp';
import facebook from '../../assets/images/facebook.webp';
import instagram from '../../assets/images/instagram.webp';
import gmail from '../../assets/images/gmail.webp';

const Footer = () => {
    return (
        <>
            <div className='footer m-0 py-5'>
                <div className='footer-col'>
                    <div className='footer-col-logo'>
                        <div className='col-3'>
                            <div className='logo'>
                                <img src={logo} className='img-fluid' alt='Balkan Promises Logo'/>
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
                                <Link className='icon' to="https://www.facebook.com/profile.php?id=100085707533502" target='_blank' rel="noopener noreferrer"><img src={facebook} className='img-fluid' alt='Facebook'/></Link>
                                <Link className='icon' to="https://www.instagram.com/balkan_promises/" target='_blank' rel="noopener noreferrer"><img src={instagram} className='img-fluid' alt='Instagram'/></Link>
                                <Link className='icon' to="mailto:balkan.promises@gmail.com" target='_blank' rel="noopener noreferrer"><img src={gmail} className='img-fluid' alt='Gmail'/></Link>
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
                        <p>Ndinjon Permeti - NINI</p>
                        <p>Coordinator for Albania</p>
                        <Link to="tel:+355699495345">+355 69 949 5345 </Link>
                    </div>
                </div>
            </div>
            <div className='madeBy'>
                <p>© Çelik Hasanaj, {new Date().getFullYear()}, All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;
