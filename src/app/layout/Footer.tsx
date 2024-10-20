import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6"

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">

                <div className="footer-top">
                    <img className="footer-top-img" src="/logofull.jpg" alt="AgroVale Logo" />
                    <div className="footer-top-contact">
                        <h2>Informações</h2>
                        <a className="footer-top-contact-link" href="#">
                            <FaMapLocation />
                            <p>Vila Valéiro - ES <br/>Córrego do Guati, Zona Rural - 29785-000</p>
                        </a>
                        <a className="footer-top-contact-link" href="#">
                            <FaPhone />
                            <p>(27) 99530-6419</p>
                        </a>
                        <a className="footer-top-contact-link" href="#">
                            <MdOutlineMailOutline />
                            <p>wpelissari@agrovaleimex.com</p>
                        </a>
                    </div>

                    <div className="footer-top-links-page">
                        <h2>Links</h2>

                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Sobre</a></li>
                            <li><a href='#'>Equipe</a></li>
                            <li><a href='#'>Curiosidades</a></li>
                            <li><a href='#'>Contato</a></li>
                            <li><a href="#">Termos e Condições</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                        </ul>
                    </div>

                    <div className="footer-top-social">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaWhatsapp /></a>
                        <a href="#"><FaFacebook /></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 Agrovale. Todos os direitos reservados.</p>
                    <p>Desenvolvido por <a href="#" target="_blank">Henrique</a> & <a href="#" target="_blank">Guilherme</a></p>

                </div>

            </div>
        </footer>
    )
}

export default Footer
