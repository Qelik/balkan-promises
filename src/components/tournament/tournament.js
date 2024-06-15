import React from 'react';
import './tournament.css'
import Header from "../Header/header";
import Teams from '../teams/teams';
import TournamentDetails from '../tournamnetDetails/tournamentDetails';
import TournamentProgram from '../tournamentProgram/tournamentProgram';
import graphSystem from '../../assets/images/graphSystem.png'
import Footer from '../footer/footer';

const Tournament = () => {
    return (
        <div>
            <Header />
            <div className='confirmedTeams'>
                <Teams />
            </div>
            <div className='tournamentDetails'>
                <TournamentDetails />
            </div>
            <div className='tournamentRegister py-5'>
                <div className='titleRegister py-5'>
                    <h1>TOURNAMENT REGISTRATION</h1>
                </div>
                <div className='registrationRools'>
                    <ol>
                        <li>Each team that will be participating in the tournament must communicate with the assigned state coordinator.</li>
                        <li>The coordinator is the responsible person who registers the participating team in the tournament.</li>
                        <li>Each team must fill the registering form.</li>
                        <li>The filled out form must be handed to the state coordinator.</li>
                        <li>The coordinator is the authorized person for comunications with teams about the registration fees.</li>
                        <li>Each document sent between the coordinators and the team should be send through E-mail or Whatsapp.</li>
                    </ol>
                </div>
            </div>
            <div className='tournametProgram'>
                <TournamentProgram />
            </div>
            <div className='tournamentSystem py-5'>
                <h1 className='py-5'>TOURNAMENT GRAPHIC SYSTEM</h1>
                <img src={graphSystem}></img>
            </div>
            <Footer />
        </div>
    );
};

export default Tournament;
