import { useState } from 'react';
import { TopSellers } from './TopSellers';
import './styles/carouselStyles.css';

export const Carousel = ({card}) => {
    return (
        <>
            <div className="container-carousel">
                <div className="subtitle-container">
                    <h2 className="title-carousel">Top Sellers</h2>
                    <span className="circle circle-span"></span>
                    <span className="circle circle-span"></span>
                    <span className="circle circle-span"></span>
                    <span className="circle circle-span"></span>
                </div>

                <div className="container-carousel-cards">
                    <TopSellers card= {card}/>
                </div>

                <div className="footer-top-seller">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>

                <div className="circle-icon icon-caret icon-caret-left">
                    <span className='caret-top'></span>
                    <span className='caret-bottom'></span>
                </div>

                <div className="circle-icon icon-caret icon-caret-right">
                    <span className='caret-top'></span>
                    <span className='caret-bottom'></span>
                </div>
            </div>
        </>
    )
}