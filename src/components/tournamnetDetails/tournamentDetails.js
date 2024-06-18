import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './tournamentDetails.css';

const TournamentDetails = () => {

    const location = useLocation();

    useEffect(() => {
        const scrollToSection = () => {
            if (location.hash) {
                const element = document.getElementById(location.hash.substring(1));
                if (element) {
                    const yOffset = -200; // Adjust this value for desired headroom
                    const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: yPosition, behavior: 'smooth' });
                }
            }
        };

        // Delay scrolling to allow the page to render first
        setTimeout(scrollToSection, 0);
    }, [location]);
    return (
        <>
            <div className='tournamnetDetailsWrap mx-auto'>
                <div className='tournamnetDetailsHeading text-center py-5'>
                    <h1>TOURNAMENT DATES AND AGES</h1>
                </div>
                <div className='tournamentsWraper py-5'>
                    <div className='tournametDetail left' id='tournament1'>
                        <div className='tournamentDetailHead'>
                            <h1>TOURNAMENT 1</h1>
                            <h2>December 07-10 2023</h2>
                        </div>
                        <div className='tournamentDetailList'>
                            <p>U-17 &nbsp; 01.01.2007 - 31.12.2008 &nbsp; (10+1)</p>
                            <p>U-15 &nbsp; 01.01.2009 - 31.12.2010 &nbsp; (10+1)</p>
                            <p>U-14 &nbsp; 01.01.2010 - 31.12.2010 &nbsp; (8+1)</p>
                            <p>U-13 &nbsp; 01.01.2011 - 31.12.2011 &nbsp; (8+1)</p>
                            <p>U-11 &nbsp; 01.01.2012 - 31.12.2012 &nbsp; (8+1)</p>
                            <p>U-10 &nbsp; 01.01.2013 - 31.12.2013 &nbsp; (8+1)</p>
                        </div>
                    </div>
                    <div className='tournametDetail right' id='tournament2'>
                        <div className='tournamentDetailHead'>
                            <h1>TOURNAMENT 2</h1>
                            <h2>JUNE 17-20 2024</h2>
                        </div>
                        <div className='tournamentDetailList'>
                            <p>U-14 &nbsp; 01.01.2010 - 31.12.2010 &nbsp; (10+1)</p>
                            <p>U-13 &nbsp; 01.01.2011 - 31.12.2011 &nbsp; (8+1)</p>
                            <p>U-12 &nbsp; 01.01.2012 - 31.12.2012 &nbsp; (8+1)</p>
                            <p>U-11 &nbsp; 01.01.2013 - 31.12.2013 &nbsp; (8+1)</p>
                            <p>U-10 &nbsp; 01.01.2014 - 31.12.2014 &nbsp; (7+1)</p>
                            <p>U-09 &nbsp; 01.01.2015 - 31.12.2015 &nbsp; (5+1)</p>
                        </div>
                    </div>
                    <div className='tournametDetail left' id='tournament3'>
                        <div className='tournamentDetailHead'>
                            <h1>TOURNAMENT 3</h1>
                            <h2>JUNE 20-23 2024</h2>
                        </div>
                        <div className='tournamentDetailList'>
                            <p>U-14 &nbsp; 01.01.2010 - 31.12.2010 &nbsp; (10+1)</p>
                            <p>U-13 &nbsp; 01.01.2011 - 31.12.2011 &nbsp; (8+1)</p>
                            <p>U-12 &nbsp; 01.01.2012 - 31.12.2012 &nbsp; (8+1)</p>
                            <p>U-11 &nbsp; 01.01.2013 - 31.12.2013 &nbsp; (8+1)</p>
                            <p>U-10 &nbsp; 01.01.2014 - 31.12.2014 &nbsp; (7+1)</p>
                            <p>U-09 &nbsp; 01.01.2015 - 31.12.2015 &nbsp; (5+1)</p>
                        </div>
                    </div>
                    <div className='tournametDetail right' id='tournament4'>
                        <div className='tournamentDetailHead'>
                            <h1>TOURNAMENT 4</h1>
                            <h2>JUNE 23-26 2024</h2>
                        </div>
                        <div className='tournamentDetailList'>
                            <p>U-14 &nbsp; 01.01.2010 - 31.12.2010 &nbsp; (10+1)</p>
                            <p>U-13 &nbsp; 01.01.2011 - 31.12.2011 &nbsp; (8+1)</p>
                            <p>U-12 &nbsp; 01.01.2012 - 31.12.2012 &nbsp; (8+1)</p>
                            <p>U-11 &nbsp; 01.01.2013 - 31.12.2013 &nbsp; (8+1)</p>
                            <p>U-10 &nbsp; 01.01.2014 - 31.12.2014 &nbsp; (7+1)</p>
                            <p>U-09 &nbsp; 01.01.2015 - 31.12.2015 &nbsp; (5+1)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TournamentDetails;
