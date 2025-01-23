import './styles/card1Styles.css'
import Button from './Button'

export const Card1 = ({ cards }) => {
    return (

        <>
            {Object.keys(cards).map((item, index) => (
                <div className="container-card1" key={index}>
                    <div
                        className={`background-card1 ${cards[item].promo ?
                            cards[item].className[0] : cards[item].className[1]}`}>
                    </div>
                    <div className="img-container">
                        <img src={cards[item].img} alt={cards[item].alt} />
                    </div>
                    <p className='description-card1'>{cards[item].description}</p>
                    {cards[item].promo ?
                        (<div className="yellow-button button-sale"><em><p>{cards[item].promo}</p></em></div>)
                        :
                        ('')}
                    <em>
                        <p className='card-price'>{cards[item].price[0]}</p>
                        {index === 2 ? <p>{cards[item].price[1]}</p> : ''}
                    </em>
                    <div
                        className={`${cards[item].className[2]} ${cards[item].promo ?
                            cards[item].className[0] : cards[item].className[1]}`}>
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