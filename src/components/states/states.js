import React from 'react';
import './states.css';
import macedonia from '../../assets/images/macedonia.jpg';
import kosovo from '../../assets/images/kosovo.png';
import albania from '../../assets/images/albania.png';
import bosnia from '../../assets/images/bosnia.png';
import bulgaria from '../../assets/images/bulgaria.png';
import croatia from '../../assets/images/croatia.png';
import greece from '../../assets/images/greece.webp';
import montenegro from '../../assets/images/montenegro.png';
import mut from '../../assets/images/mut.webp';
import romania from '../../assets/images/romania.webp';
import slovenia from '../../assets/images/slovenia.png';
import turkey from '../../assets/images/turkey.webp';

const States = () => {
    return (
        <>
            <div className='state-image-holder py-5'>
                <div className='state-image-item'>
                    <img src={macedonia} alt='North Macedonia' />
                    <p>North Macedonia</p>
                </div>
                <div className='state-image-item'>
                    <img src={kosovo} alt='Kosova' />
                    <p>Kosova</p>
                </div>
                <div className='state-image-item'>
                    <img src={albania} alt='Albania' />
                    <p>Albania</p>
                </div>
                <div className='state-image-item'>
                    <img src={bosnia} alt='Bosnia and Herzegovina' />
                    <p>Bosnia and Herzegovina</p>
                </div>
                <div className='state-image-item'>
                    <img src={croatia} alt='Croatia' />
                    <p>Croatia</p>
                </div>
                <div className='state-image-item'>
                    <img src={greece} alt='Greece' />
                    <p>Greece</p>
                </div>
            
                <div className='state-image-item'>
                    <img src={montenegro} alt='Montenegro' />
                    <p>Montenegro</p>
                </div>
                <div className='state-image-item'>
                    <img src={bulgaria} alt='Bulgaria' />
                    <p>Bulgaria</p>
                </div>
                <div className='state-image-item'>
                    <img src={mut} alt='Serbia' />
                    <p>Serbia</p>
                </div>
                <div className='state-image-item'>
                    <img src={romania} alt='Romania' />
                    <p>Romania</p>
                </div>
                <div className='state-image-item'>
                    <img src={slovenia} alt='Slovenia' />
                    <p>Slovenia</p>
                </div>
                <div className='state-image-item'>
                    <img src={turkey} alt='Turkey' />
                    <p>Turkey</p>
                </div>
            </div>
        </>
    );
};

export default States;
