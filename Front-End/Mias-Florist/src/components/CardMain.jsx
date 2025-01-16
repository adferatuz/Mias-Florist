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
                className={'prev-button'}                
            />
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
            </section>
        </main>
    )
}