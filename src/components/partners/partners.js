import React from 'react';
import './partners.css';
import uefa from '../../assets/images/uefa.png';
import ohri from '../../assets/images/bashkiaOher.png';
import fairPlay from '../../assets/images/fairplay.png';

const Partner = () => {
    return (
        <>
            <div className='partner-img-holder'>
                <img src={uefa} alt='UEFA' />
                <img src={ohri} alt='OHRI' />
                <img src={fairPlay} alt='Fair Play' />
            </div>
        </>
    );
};

export default Partner;
