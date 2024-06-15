import React from 'react';
import './partners.css';
import uefa from '../../assets/images/uefa.png';
import ohri from '../../assets/images/bashkiaOher.png';
import fairPlay from '../../assets/images/fairplay.png';

const Partner = () => {
    return (
        <>
            <div className='partner-img-holder'>
                <img src={uefa} alt='' />
                <img src={ohri} alt='' />
                <img src={fairPlay} alt='' />
            </div>
        </>
    );
};

export default Partner;
