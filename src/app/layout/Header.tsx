"use client"
import { useState } from 'react';
import Image from 'next/image';
import '../sass/layout/_header.scss';
import Logo from '../assets/icon.png';
import BrazilFlag from '../assets/Brazil.png';
import UK from '../assets/uk.png';
import { MdEmail, MdPhone } from "react-icons/md";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import ResponsiveMenu from '../components/ResponsiveMenu';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
  
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
  };
  
    const t = useTranslations('Header');

  return (
    <header>

      <div className='headertop'>
        <div className='headertopsize'>
          <div className='header-contact'>
            <div className='header-contact-link-left'>
              <a href="#">
                <MdEmail />
                <p>agrovaleimportacao@gmail.com</p>
              </a> 
            </div>
            <p className='divider-header-contact'>|</p>
            <div className='header-contact-link-right'>
              <a href="#">
                <MdPhone />
                <p>(27) 99530-6419</p>
              </a>
            </div>
          </div>
          <div className='header-socialmedia'>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className='headerbottom'>
        <div className='headerbottomsize'>
          <div className='header-logo-links'>
            <Image src={Logo} alt="Agrovale Importação e Exportação" width={60} />
            <nav className='header-nav-links'>
              <ul>
                <li><a href='#'>{t('Home')}</a></li>
                <li><a href='#'>{t('Sobre')}</a></li>
                <li><a href='#'>{t('Equipe')}</a></li>
                <li><a href='#'>{t('Curiosidade')}</a></li>
                <li><a href='#'>{t('Contato')}</a></li>
              </ul>
            </nav>
          </div>

          <div className='header-logo-flags'>
            <Link href="/pt"><Image src={BrazilFlag} alt="Brazil Flag" width={30} /></Link>
            <Link href="/en"><Image src={UK} alt="UK Flag" width={30} /></Link>
          </div>

          <div className='menu-hamburger' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>  
      </div>
      {isOpen &&  <ResponsiveMenu isOpen={isOpen} onClose={toggleMenu} />} 
    </header>

    
  )
}

export default Header
