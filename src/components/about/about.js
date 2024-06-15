import React from 'react';
import './about.css'
import Header from "../Header/header";
import Footer from "../footer/footer"
import AgronMerko from "../../assets/images/AgronMerko.png"
import gallery1 from "../../assets/images/gallery1.png"
import gallery2 from "../../assets/images/gallery2.png"
import stadiums from "../../assets/images/stadiums.png"
import hotels from "../../assets/images/hotels.png"
import city from "../../assets/images/city.png"

const About = () => {
    return (
        <div>
            <Header />
            <div className='aboutWrapper py-5'>
                <div className='aboutHead py-5'>
                    <h1>About US</h1>
                </div>
                <div className='aboutIntro'>
                    <img src={AgronMerko} className='bushi'></img>
                    <p>
                    Greetings
dear participants in the football activity that
takes place under the auspices of the Municipality of Ohrid
since 2015. This greeting comes warm
as for the participants who are part of this
tournament for many years, but also for them
participant which they become part of for the first time.
This activity aims at solidarity to all participating states, the monitoring of
sporting spirit and fair play throughout the tournament
among all participating roles as: holder of
the activity of the local leaders of the Municipality of Ohrid
observers and judges, trainers and athletes as well
the main part of this event which will show
and the most important part which is the game of
football, which will mean that all the days of the activity the stadiums where they will be held will be buzzing with passionate fans, who
they will also be the main supporters of their teams. Besides the importance that this activity
will have a special importance in terms of sports, the part of free time,
where all participants will pass in an organized manner all together
festive evening, but also during the day various movements in the form of guides for
getting to know closely all the resources and the natural and historical beauties that the City of
Ohrid offers itself.
I have no choice but to close this greeting for everyone.
My thanks to the organizers who make this activity possible
football for all teams of participating countries, for all observers and
the judges, for all the trainers and athletes participating in this event.
A special thanks goes to the Municipality of Ohrid, which organizes these
such necessary and important activities in the promotion of
the beautiful and popular sport of football, as well as history and beauty
nature of our city!
Sincerely, Your Friend
Agron MERKO!
                    </p>
                </div>
                <div className='galleryWrapper py-5'>
                    <div className='galleryHead py-5'>
                        <h1>Gallery</h1>
                    </div>
                    <div className='gallery'>
                        <img src={gallery1}></img>
                        <img src={gallery2}></img>
                    </div>
                </div>
                <div className='galleryWrapper py-5'>
                    <div className='galleryHead py-5'>
                        <h1>Stadiums</h1>
                    </div>
                    <div className='gallery'>
                        <img src={stadiums}></img>
                    </div>
                </div>
                <div className='galleryWrapper py-5'>
                    <div className='galleryHead py-5'>
                        <h1>Hotels</h1>
                    </div>
                    <div className='gallery'>
                        <img src={hotels}></img>
                    </div>
                </div>
                <div className='galleryWrapper py-5'>
                    <div className='galleryHead py-5'>
                        <h1>City Views</h1>
                    </div>
                    <div className='gallery'>
                        <img src={city}></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
