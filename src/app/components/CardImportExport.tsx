import '../sass/components/_cardimportexport.scss';
import { FaShip, FaWarehouse } from 'react-icons/fa';

const CardImportExport = () => {
    return (
        <div className='cardimportexport'>
            <div className='cardimportexport-image'>
                <img src="/importexport.jpg" alt="Importação e Exportação da Agrovale" />
                <div className='cardimportexport-overlay'>
                </div>
            </div>
            <div className='cardimportexport-text'>
                <h1>Importação e Exportação</h1>
                <p className='cardimportexport-text-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime at et, fugit quos voluptatem illo totam, numquam incidunt a id accusamus neque laborum ab dolorum, sunt blanditiis sapiente itaque. Possimus nam quaerat vel ipsa provident aperiam molestias suscipit, quis dolores. Voluptas, numquam!</p>
                <p className='cardimportexport-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores quisquam ipsam libero. Fornecemos soluções de alta qualidade para as necessidades do mercado global.</p>
                <div className='info-section'>
                    <div className='info-item'>
                        <FaShip className='icon' />
                        <div className='info-content'>
                            <h3 className='title-info-content'>Transporte Marítimo</h3>
                            <p>Oferecemos serviços completos de importação e exportação via transporte marítimo, garantindo segurança e eficiência para o envio de mercadorias em todo o mundo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatum pariatur ducimus. Quis, saepe tenetur.</p>
                        </div>
                    </div>
                    <div className='info-item'>
                        <FaWarehouse className='icon' />
                        <div className='info-content'>
                            <h3 className='title-info-content'>Armazenamento Seguro</h3>
                            <p>Contamos com soluções de armazenagem para proteger seus produtos, com infraestrutura de ponta e sistemas de monitoramento 24 horas.</p>
                        </div>
                    </div>
                    <div className='info-item'>
                        <FaShip className='icon' />
                        <div className='info-content'>
                            <h3 className='title-info-content'>Transporte Marítimo</h3>
                            <p>Oferecemos serviços completos de importação e exportação via transporte marítimo, garantindo segurança e eficiência para o envio de mercadorias em todo o mundo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatum pariatur ducimus. Quis, saepe tenetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardImportExport;
