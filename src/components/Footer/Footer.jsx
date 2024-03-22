import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa6";




export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer-row'>
                <div className='footer-links'>
                    <h4>Mate Amargo</h4>
                    <ul>
                        <li><a href='#'>Nuestro servicio</a></li>
                        <li><a href='#'>Politica de privacidad</a></li>
                        <li><a href='#'>Suscribite</a></li>                        
                    </ul>
                </div>
                <div className='footer-links'>
                    <h4>Ayuda</h4>
                    <ul>
                        <li><a href='#'>Preguntas frecuentes</a></li>
                        <li><a href='#'>Compras</a></li>
                        <li><a href='#'>Envíos</a></li>                        
                        <li><a href='#'>Pago</a></li>                        
                    </ul>
                </div>
                <div className='footer-links'>
                    <h4>Tienda</h4>
                    <ul>
                        <li><a href='#'>Vende tu camiseta</a></li>
                        <li><a href='#'>Botón de arrepentimiento </a></li>                      
                    </ul>
                </div>
                <div className='footer-links'>
                    <h4>Contacto</h4>
                    <div className='social-link'>
                        <a href='https://www.linkedin.com/in/tadeoabalos/'><FaLinkedin/></a>
                        <a href='https://github.com/tadeoabalos/mateamargo'><FaGithub /></a>
                        <a href="mailto:tadeoabalos@outlook.com"><PiMicrosoftOutlookLogoFill /></a>
                        <a href="https://drive.google.com/file/d/1K65QlriCIq5Z32gy9ngWIh1c4oPi4PIP/view?usp=sharing"><FaFilePdf /></a>
                    </div>                                        
                </div>
            </div>
        </div>
    </footer>
  )
}
