import './styles/buttonStyles.css'
import imgCarrito from '../assets/carrito.png'
import imgContador from '../assets/contador.png'

export default function Button ({
    type,
    className,
    content,
    alt
}){
    return (
        <button 
            className={className}
            type={type ? type : 'button'}
        >
                {className === 'search-button' ? 
                    (<img src={content} alt={alt} />) 
                        : 
                className === 'cart-button' ?
                    (<>
                        <img className='cart-icon' src={imgCarrito} alt="Icono carrito de compras" />
                        <img className='cart-count' src={imgContador} alt="Icono contador" />
                    </>)
                        :
                className === 'prev-button' ?
                    (<>
                        <div className="icon-prev"></div> 
                        <div className="icon-next"></div>                         
                    </>)
                        :
                className === 'radio-button' ?
                    (<>
                        <div className="icon-radio"></div>
                    </>)   
                    :
                    (content)              
                }
        </button>
    )
}