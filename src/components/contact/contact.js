import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../footer/footer';

const Contact = () => {
    return (
        <>
            <Header />
            <div className='contactWrapper py-5'>
                <div className='contactHead py-5'>
                    <h1>Our contact information</h1>
                </div>
                <div className='contact'>
                    <div className='contacts py-5'>
                        <div className='person'>
                            <p>AGRON MERKO</p>
                            <p>Tournament President</p>
                            <Link to="tel:+38978341646">+38978341646</Link>
                        </div>
                        <div className='person'>
                            <p>PAVLI BUNECI & YOUNG STARS TOURNAMENTS</p>
                            <p>Coordinator for Albania | Kosova | Montenegro | Greece</p>
                            <Link to="tel:+355674911775">+ 355 67 491 1775 </Link> &nbsp;&nbsp; : &nbsp; <Link to="tel:+355693381633">+355 69 338 1633</Link>
                        </div>
                        <div className='person'>
                            <p>ALEKSANDAR STRUMOSKI</p>
                            <p>Coordinator for North Macedonia | Bulgaria | Romania | Turkey | Serbia</p>
                            <Link to="tel:+38978550087">+38978550087</Link>
                        </div>
                        <div className='person'>
                            <p>Sladjan Mariç</p>
                            <p>Coordinator for Croatia | Bosnia and Herzegovina</p>
                            <Link to="mailto:sladjanmaric08@gmail.com">sladjanmaric08@gmail.com</Link>
                        </div>
                    </div>
                    <div className='contactMap py-5'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1060.4764590330067!2d20.812440397308638!3d41.105196479273914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350db573c15c8df%3A0x5e4f073a279f2c30!2zNFI0NisyWFYgU3RhZGl1bSBCaWxqYW5hJ3MgU3ByaW5ncywg0JDQodCd0J7QnCwgT2hyaWQ!5e1!3m2!1sen!2smk!4v1718481044949!5m2!1sen!2smk" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
