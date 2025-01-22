import './styles/topSellersStyles.css'
import Button from './Button'

export const TopSellers = ({ card }) => {
    return (

        <>
            {Object.keys(card).map((item, index) => (
                <div className="container-card1" key={index}>
                    <div
                        className={`background-card1 ${card[item].promo ?
                            card[item].className[0] : card[item].className[1]}`}>
                    </div>
                    <div className="img-container">
                        <img src={card[item].img} alt={card[item].alt} />
                    </div>
                    <p className='description-card1'>{card[item].description}</p>
                    {card[item].promo ?
                        (<div className="yellow-button button-sale"><em><p>{card[item].promo}</p></em></div>)
                        :
                        ('')}
                    <em>
                        <p className='card-price'>{card[item].price[0]}</p>
                        {index === 2 ? <p>{card[item].price[1]}</p> : ''}
                    </em>
                    <div
                        className={`${card[item].className[2]} ${card[item].promo ?
                            card[item].className[0] : card[item].className[1]}`}>
                        <Button
                            type={'button'}
                            className={'yellow-button '}
                            content={'Add to cart'}
                        />
                    </div>
                </div>
            ))}
        </>


    )
}