import { useEffect } from 'react';
import '../sass/components/_responsivemenu.scss';
import Image from 'next/image';
import Logo from '../assets/icon.png';
import BrazilFlag from '../assets/brazil.png';
import UK from '../assets/uk.png';

interface ResponsiveMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ onClose, isOpen }) => {
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={`responsive-menu-overlay ${isOpen ? 'open' : ''}`}>
          <div className={`responsive-menu ${isOpen ? 'open' : ''}`}>
              <div className='responsive-menu-header'>
                    <Image src={Logo} alt="Agrovale Importação e Exportação" width={60} />
                    <div className='responsive-menu-logo-flags'>
                        <Image src={BrazilFlag} alt="Brazil Flag" width={30} />
                        <Image src={UK} alt="UK Flag" width={30} />
                    </div>
                  
                  <button className='close-menu' onClick={onClose}>X</button>
              </div>
        
        <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Sobre</a></li>
            <li><a href='#'>Equipe</a></li>
            <li><a href='#'>Curiosidades</a></li>
            <li><a href='#'>Contato</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
