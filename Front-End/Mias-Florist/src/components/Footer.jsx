import './styles/footerStyles.css'
import imgLogoWhithe from '../assets/Logo-White.svg'
import iconUbicacion from '../assets/iconUbicacion.png'
import iconEmail from '../assets/iconEmail.png'
import iconMarcaAgua from '../assets/marcaCompañia.png'
import Input from './Input'
import Button from './Button'

export default function Footer(){
    return(
        <div className="footer">
            <header className="header-footer">
                <img src={imgLogoWhithe} alt="Imagen logo blanco" />
            </header>
            <section className="section-footer ">
                <div className='border-line'></div>
                <div className='footer-cart'>
                    <ul className='links footer-links'>
                        <li>Products</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                    <ul className='links footer-links'>
                        <li>Frequent questions</li>
                        <li>Visit our blog</li>
                    </ul>
                    <Button 
                        type={'button'}
                        className={'yellow-button'}
                        content={'Login system'}
                    />
                </div>
                <div className='footer-cart'>
                    <p>Suscribe for Exclusive Email Offers</p>                    
                    <Input 
                        type={'email'}
                        name={'email'}
                        placeholder={'Your Email Address'}
                        value={''}
                        id={'email'}
                        onChange={''}
                        className={'search-input email-input'}

                    />
                    <Button 
                        type={'button'}
                        className={'yellow-button sign-button'}
                        content={'Sign me up'}
                    />
                </div>
                <div className='footer-cart'>
                    <div><img src={iconUbicacion} alt="" /><p>Location</p></div>
                    <p className='paragraph-contact'>35 Pearl St suite 103, New Britain, CT</p>
                    <p className='paragraph-contact'>06051</p>
                    <div><img src={iconEmail} alt="" /><p>Email</p></div>
                    <p className='paragraph-contact'>info@wiseatp.com</p>
                </div>
            </section>
            <footer className="footer-footer">
                <ul className='links footer-links'>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
                <p>2021 Copyright <img src={iconMarcaAgua} alt="" /> Ingenuity & Solutions</p>
            </footer>
        </div>
    )
}
