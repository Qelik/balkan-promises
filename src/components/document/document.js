import React from 'react';
import './document.css';
import Header from '../Header/header';
import Footer from '../footer/footer';
import docDownload from '../../assets/images/docDownload.png'

const Document = () => {
    return (
        <>
            <Header />
            <div className='documentWrapper py-5'>
                <div className='documentHead py-5'>
                    <img src={docDownload}></img>
                    <h1>Downloadable documents</h1>
                </div>
                <div className='downloadDocument'>
                    <h2>Click bellow to download the registreing form!</h2>
                    <a href="https://drive.google.com/file/d/1ryJc-p96-jdlUGA9dF9z7vDoSfHC7Fj0/view?usp=sharing" className='button' target='_blank'>Download the register form</a>
                </div>
                <div className='downloadDocument'>
                    <h2>Click bellow to download the game protocol form!</h2>
                    <a href="https://drive.google.com/file/d/1phrFICajxTm_n7X85NNFrI6Fr8yh7xwR/view?usp=sharing" className='button' target='_blank'>Download the game protocol</a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Document;
