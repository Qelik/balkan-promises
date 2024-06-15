import React from 'react';
import './home.css';
import Header from "../Header/header";
import States from "../states/states"
import Footer from '../footer/footer';
import img1 from "../../assets/images/football-kids.jpg"
import CardSlider from '../cardSlider/cardSlider';
import Partner from '../partners/partners';

const Home = () => {
    return (
        <>
            <Header />
            <div className='container-fluid p-0'>
                <div className='image-holder'>
                    <img src={img1} className='p-0 m-0' alt="hero image" />
                    <div className='text-holder text-center'>
                        <h1>BALKAN PROMISES</h1>
                        <h3>Football Tournament</h3>
                    </div>
                </div>
            </div>
            <div className='tournaments row justify-content-around w-100 p-5 m-0'>
                <div className='col-12 text-center py-4'>
                    <h1>UPCOMING TOURNAMENTS</h1>
                </div>
                <CardSlider />
            </div>
            <div className='states py-5 w-80'>
                <States />
            </div>
            <div className='partner py-5 w-80 mx-auto'>
                <Partner />
            </div>
            <div className='footer pt-5 w-100'>
                <Footer />
            </div>
        </>
    );
};

export default Home;