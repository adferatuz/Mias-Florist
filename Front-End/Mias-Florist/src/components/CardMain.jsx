import './styles/cardMainStyles.css'
import ImgFloreroPrincipal from '../assets/Grupo-5.png'
import Button from './Button'

export const CardMain = () => {
    return (
        <main className="container-card">
            <img src={ImgFloreroPrincipal} alt="Florero principal" />
            
            <Button
                type={'button'}
                className={'radio-button'}
            />
            <section className="card-main">
            <Button
                type={'button'}
                className={'cart-button prev-button'}                
            />
            </section>
        </main>
    )
}