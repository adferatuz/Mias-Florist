import { Link, useLocation } from 'react-router';
import { paths } from '../core/utils/paths';
import imgLogo from '../assets/Logo.svg'
import imgCuadros from '../assets/cuadros.png'
import imgTelefono from '../assets/telefono.png'
import imgDirectorio from '../assets/directorio.png'
import imgLupa from '../assets/lupa.png'
import imgPuntos from '../assets/puntos.png'
import Input from './Input'
import Button from './Button'
import './styles/navbarStyles.css'
//import { useState } from 'react';

export default function Navbar() {
    const location = useLocation()
    const filtrarRutas = paths;

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div>
                    <img src={imgTelefono} alt="icono de un telefono" />
                    <p>+1 (800) 312 - 2121</p>
                </div>
                <div>
                    <ul className='links'>
                        {Object.keys(filtrarRutas).map((path) => (
                            <li key={path}>
                                <Link
                                    to={path === '/products' ? "#" : path === '/contact' ? "#" : path}
                                    className={location.pathname === path? 'active' : ''} 
                                               
                                >
                                    {filtrarRutas[path]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container-fluid">
                <div>
                    <img src={imgLogo} alt="" />
                </div>
                <div className='search-bar'>
                    <Input
                        type={'text'}
                        name={'search'}                        
                        placeholder={'Search'}
                        value={''}
                        id={'search'}
                        onChange={''}
                        className={'search-input'}                    
                    />
                    <Button
                        type={''}
                        className={'search-button'}
                        content={imgLupa}
                        alt={'Directdorio'}                        
                    />
                </div>
            </div>

            <div className="container-fluid">
                <div>
                    <img src={imgDirectorio} alt="Imagen de un directorio" />
                    <p>172 14th Street Office 503, NY</p>
                </div>
                <div className='container-payment'>
                    <div>
                        <img src={imgCuadros} alt="imagen de cuadros" />

                    </div>
                    <div>
                        <Button
                            type={''}
                            className={'cart-button'}                        
                        />
                    </div>
                    <div>
                       <img src={imgPuntos} alt="" />
                    </div>
                </div>
            </div>

        </nav>
    )
}