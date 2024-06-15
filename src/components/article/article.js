import React from 'react';
import './article.css';
import Header from '../Header/header';
import Footer from '../footer/footer';

const Article = () => {
    return (
        <>
            <Header />
            <div className='ArticleWrapper py-5'>
                <div className='ArticleHead py-5'>
                    <h1>Article</h1>
                </div>
                <div className='Articles'>
                    <div className='article'>
                        <h3>Article 1</h3>
                        <p>The organizer of the international football tournament is the Municipality of Ohrid in collaboration with Fk Mister G.</p>
                    </div>
                    <div className='article'>
                        <h3>Article 2</h3>
                        <p>In the tournament, they will compete in groups of four teams
everyone plays with everyone; the first and second in the ranking in the group will
qualifies for the quarterfinals; third and fourth in group standings
will continue the competition with the "knock out" system for the final</p>
                    </div>
                    <div className='article'>
                        <h3>Article 3</h3>
                        <p>Only football players will have the right to participate in the tournament
equipped with football booklets of FFM North Macedonia and for
for teams from abroad, only passports will be valid. each
footballers will personally present to the observer and the referee
match the relevant document. The footballer who does not present
passport document WILL NOT BE ALLOWED TO PLAY.</p>
                    </div>
                    <div className='article'>
                        <h3>Article 4</h3>
                        <p>Each team is allowed to be led by a coach and responsible
                        of the team.</p>
                    </div>
                    <div className='article'>
                        <h3>Article 5</h3>
                        <p>The teams will compete in the game with the number of footballers according to
the regulations defined for this tournament according to the age group
relevant.</p>
                    </div>
                    <div className='article'>
                        <h3>Article 6</h3>
                        <p>Violation of sports discipline in the match will be punished with: 2 minutes and 5 minutes exclusion from the game.</p>
                    </div>
                    <div className='article'>
                        <h3>Article 7</h3>
                        <p>The regulation, duration and schedule of the matches will be taken care of
                        the match observer.</p>
                    </div>
                    <div className='article'>
                        <h3>Article 8</h3>
                        <p>If the two teams have the same number of points it will be taken into account
the match played between them in the group.
If it is identical, the number of wins will be considered
marked.
If it is the same, it will be considered more
goals scored.
If the three teams have the same number of points (point system) it is
made auxiliary table of their matches played among themselves, e
which will take into consideration the above rules.</p>
                    </div>
                    <div className='article'>
                        <h3>Article 9</h3>
                        <p>If in the quarter-final, semi-final and final matches in
regular time the result is a draw then there are no minutes
overtime, but the match continues with penalty shots. They will be shot
from 3 (three) penalties.</p>
                    </div>
                    <div className='article'>
                        <h3>Article 10</h3>
                        <p>The players and the goalkeeper take part in the penalty shootouts
                        who finished the game.</p>
                    </div>
                    <div className='article'>
                        <h3>Article 11</h3>
                        <p>For all those rules which are not included in this
valid regulations will be the rules of the Federation
of RMV football.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Article;
