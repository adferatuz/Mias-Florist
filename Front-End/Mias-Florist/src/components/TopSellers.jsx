import './styles/topSellersStyles.css'
import { card1 } from '../core/utils/utils'
import Button from './Button'

export const TopSellers = () => {
    return (
        <div className="top-sellers-container">
            <div className="subtitle-container">
                <h2 className="top-sellers-title">Top Sellers</h2>
                <span className="circle circle-span"></span>
                <span className="circle circle-span"></span>
                <span className="circle circle-span"></span>
                <span className="circle circle-span"></span>
            </div>
            <div className="container-card-top-sellers">
                {Object.keys(card1).map((item, index) => (
                    <div className="top-seller" key={index}>
                        <div
                            className={`background-top-seller ${card1[item].promo ?
                                card1[item].className[0] : card1[item].className[1]}`}>
                        </div>
                        <div className="img-container">
                            <img src={card1[item].img} alt={card1[item].alt} />
                        </div>
                        <p className='description-card1'>{card1[item].description}</p>
                        {card1[item].promo ?
                            (<div className="yellow-button button-sale"><em><p>{card1[item].promo}</p></em></div>)
                            :
                            ('')}
                        <em>
                            <p className='card1-price'>{card1[item].price[0]}</p>
                            {index === 2 ? <p>{card1[item].price[1]}</p> : ''}
                        </em>
                        <div
                            className={`${card1[item].className[2]} ${card1[item].promo ?
                                card1[item].className[0] : card1[item].className[1]}`}>
                            <Button
                                type={'button'}
                                className={'yellow-button '}
                                content={'Add to cart'}
                            />
                        </div>

                    </div>
                ))}
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
    )
}