import { useState } from 'react';
import './styles/carouselStyles.css';
import { Card1 } from './Card1';

export const Carousel = ({ title, cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 4;

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1); // Retrocede una card
          }
    };

    const goToNext = () => {
        if (currentIndex < Object.keys(cards).length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1); // Avanza una card
          }
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="container-carousel">
                <div className="subtitle-container">
                    <h2 className="title-carousel">{title}</h2>
                    <span className="circle circle-span"></span>
                    <span className="circle circle-span"></span>
                    <span className="circle circle-span"></span>
                    <span className="circle circle-span"></span>
                </div>

                <div className="container-carousel-cards"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                      }}
                >
                    <Card1 cards={cards} />
                </div>

                <div className="footer-top-seller">
                    {Object.keys(cards).map((item, index) => (
                        <span
                            key={index}
                            className={`circle dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>

                <div className="circle-icon icon-caret icon-caret-left carousel-button" onClick={goToPrevious}>
                    <span className='caret-top'></span>
                    <span className='caret-bottom'></span>
                </div>

                <div className="circle-icon icon-caret icon-caret-right carousel-button next" onClick={goToNext}>
                    <span className='caret-top'></span>
                    <span className='caret-bottom'></span>
                </div>
            </div>
        </>
    )
}