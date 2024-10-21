import Image from 'next/image';
import '../sass/layout/_header.scss';
import Logo from '../assets/icon.png';
import BrazilFlag from '../assets/Brazil.png';
import UK from '../assets/uk.png';
import { MdEmail, MdPhone } from "react-icons/md";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header>

      <div className='headertop'>
        <div className='headertopsize'>
          <div className='header-contact'>
            <div className='header-contact-link-left'>
              <a href="#">
                <MdEmail />
                <p>wpelissari@agrovaleimex.com</p>
              </a> 
            </div>
            <p className='divider-header-contact'>|</p>
            <div className='header-contact-link-right'>
              <a href="#">
                <MdPhone />
                <p>+55 027 99943-1779</p>
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
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Sobre</a></li>
                <li><a href='#'>Equipe</a></li>
                <li><a href='#'>Curiosidades</a></li>
                <li><a href='#'>Contato</a></li>
              </ul>
            </nav>
          </div>

          <div className='header-logo-flags'>
            <Image src={BrazilFlag} alt="Brazil Flag" width={30} />
            <Image src={UK} alt="UK Flag" width={30} />
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header
