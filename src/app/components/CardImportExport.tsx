import '../sass/components/_cardimportexport.scss';
import { FaGlobe, FaOilCan, FaLandmark } from 'react-icons/fa';

const CardImportExport = () => {
    return (
        <div className='cardimportexport'>
            <div className='cardimportexport-image'>
                <img className='importexportlogo' src="/egitoarabia2.jpg" alt="Importação e Exportação da Agrovale" />
                <div className='cardimportexport-overlay'></div>
            </div>
            <div className='cardimportexport-text'>
                <h1>Importação e Exportação</h1>
                <p className='cardimportexport-text-p'>
                    A Agrovale exporta pimenta-do-reino de alta qualidade para mercados exigentes, como o Egito e a Arábia Saudita, países conhecidos por suas tradições culturais e importância econômica no cenário global.
                </p>
                <p className='cardimportexport-text-p'>
                    Nossas operações atendem às necessidades específicas de cada região, respeitando os valores culturais e econômicos de nossos parceiros comerciais.
                </p>
                <div className='info-section'>
                    <div className='info-item'>
                        <div className='icon'>
                            <FaLandmark />
                        </div>
                        <div className='info-content'>
                            <h3 className='title-info-content'>Egito</h3>
                            <p>
                                O Egito é uma nação rica em história e cultura, sendo famoso por suas antigas civilizações e tradições. Exportamos nossos produtos para esse país emblemático, onde o comércio é uma parte essencial da vida diária.
                            </p>
                            <p>
                                Os egípcios valorizam a negociação e a barganha, características que tornam o comércio local único. Além disso, o Egito possui uma das maiores cidades da África, Cairo, com uma população de cerca de 20 milhões de habitantes.
                            </p>
                        </div>
                    </div>
                    <div className='info-item'>
                        <div className='icon'>
                            <FaOilCan />
                        </div>
                        <div className='info-content'>
                            <h3 className='title-info-content'>Arábia Saudita</h3>
                            <p>
                                Exportamos nossa pimenta-do-reino para a Arábia Saudita, um país com uma economia robusta e vasta riqueza em recursos naturais, especialmente petróleo. O país é o maior sem rios no mundo, com 95% de seu território coberto por desertos.
                            </p>
                            <p>
                                A Arábia Saudita é conhecida por suas rígidas tradições culturais, como o fechamento de lojas cinco vezes ao dia para as orações. A cidade de Meca, que abriga o maior relógio do mundo, é um importante centro cultural e religioso.
                            </p>
                        </div>
                    </div>
                    <div className='info-item'>
                        <div className='icon'>
                            <FaGlobe />
                        </div>
                        <div className='info-content'>
                            <h3 className='title-info-content'>Comércio Internacional</h3>
                            <p>
                                A Agrovale atende a mercados globais com soluções personalizadas de importação e exportação. Garantimos a qualidade de nossos produtos e a segurança nas operações, contribuindo para a conexão entre culturas e economias.
                            </p>
                            <p>
                                Trabalhamos para expandir nossas parcerias internacionais, levando o sabor e a qualidade do Brasil para os quatro cantos do mundo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardImportExport;
