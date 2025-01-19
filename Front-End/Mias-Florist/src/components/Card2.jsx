import './styles/card2Styles.css'
import { card2 } from '../core/utils/utils'

export const Card2 = () => {
    return (
        <div className="card-2_container">
            {Object.keys(card2).map((key) => (
                <div className="card-2" key={key}>
                    <img src={card2[key].img} alt={card2[key].alt} />
                </div>
            ))}

        </div>
    )
}