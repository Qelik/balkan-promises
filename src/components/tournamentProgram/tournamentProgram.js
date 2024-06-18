import React from 'react';
import './tournamentProgram.css';

const TournamentProgram = () => {
    return (
        <>
            <div className='tournamentProgramWrapper py-5 mx-auto'>
                <div className='tournamentProgramTitle py-5'>
                    <h1>SCHEDULE</h1>
                </div>
                <div className='tournamentProgramList'>
                    <div className='day'>
                        <h2>DAY 1</h2>
                        <p>13:00 &emsp;&emsp;&emsp;&emsp; Arrival in the city of Ohrid</p>
                        <p>13:00 - 14:00 &nbsp; &nbsp; Accomodation at the hotel on the first day starts with dinner</p>
                        <p>21:00 &emsp;&emsp;&emsp;&emsp; Activity staff meeting at Hotel Desaret and representatives of Ohrid Municipality
                             with trainers and club representatives on the start of the tournament and the distribution of regulations and match calendars.
                             <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; - After the work meeting, a cocktail with everyone representatives in this tournament.</p>
                    </div>
                    <div className='day'>
                        <h2>DAY 2</h2>
                        <p>09:00 &emsp;&emsp;&emsp;&emsp; Opening match and group matches according to tournament schedule</p>
                        <p>16:00 &emsp;&emsp;&emsp;&emsp; Group matches according to tournament schedule</p>
                    </div>
                    <div className='day'>
                        <h2>DAY 3</h2>
                        <p>09:00 &emsp;&emsp;&emsp;&emsp; Opening match and group matches according to tournament schedule</p>
                        <p>16:00 &emsp;&emsp;&emsp;&emsp; Group matches according to tournament schedule</p>
                    </div>
                    <div className='day'>
                        <h2>DAY 4</h2>
                        <p>09:00 &emsp;&emsp;&emsp;&emsp; Development of final matches according to age groups.</p>
                        <p>12:30 &emsp;&emsp;&emsp;&emsp; The closing ceremony of the tournament with the distribution of cups, medals and diplomas to the winners.</p>
                        <p>13:00 &emsp;&emsp;&emsp;&emsp; Hotel accommodation on the last day ends with lunch. Journey home.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TournamentProgram;
