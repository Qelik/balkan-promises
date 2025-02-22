import React from 'react';
import Slider from 'react-slick';
import { Outlet, Link, useLocation } from "react-router-dom";
import './cardSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import football from "../../assets/images/football-kids.jpg";
import image1 from "../../assets/images/image1_0.jpg";
import tournament3 from "../../assets/images/summer-tournaments.jpg"
import tournament4 from "../../assets/images/tournament4.jpeg"
import tournament5 from "../../assets/images/tournament5.jpg"

const data = [
    {
        name: 'Tournament 1',
        img: image1,
        date: '16 - 19 June',
        to: '/tournament#tournament2'
    },
    {
        name: 'Tournament 2',
        img: tournament3,
        date: '19 - 22 June',
        to: '/tournament#tournament3'
    },
    {
        name: 'Tournament 3',
        img: tournament4,
        date: '23 - 26 June',
        to: '/tournament#tournament4'
    },
    {
        name: 'Tournament 4',
        img: tournament5,
        date: '06 - 09 December',
        to: '/tournament#tournament4'
    }
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
}

const CardSlider = () => {

    return (
        <>
            <div className='w-3/4 m-auto'>
                <div className='mt-20'>
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className='card-holder'>
                                <div className='c-img'>
                                    <img src={d.img} className='img-fluid' alt='' />
                                </div>
                                <div className='card-details'>
                                    <p className='text-xl'>{d.name}</p>
                                    <p>{d.date} {new Date().getFullYear()}</p>
                                    <Link className='button-t' to={d.to}>Details</Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default CardSlider;
