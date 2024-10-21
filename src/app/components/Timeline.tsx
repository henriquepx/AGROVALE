import { FaPepperHot } from "react-icons/fa";
import { FaHandshake, FaGlobe } from "react-icons/fa6";

const Timeline = () => {
  return (
    <div className="container">
      <div id="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaPepperHot size={20} color="#ffffff" />
          </div>
          <div className="timeline-content">
            <h2>Fundação da Agrovale</h2>
            <p>
              Em 1995, a Agrovale foi fundada com o objetivo de atender ao mercado agrícola local, especializando-se na produção de pimenta do reino. Desde o início, a empresa se destacou pela qualidade dos produtos oferecidos.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaHandshake size={20} color="#ffffff" />
          </div>
          <div className="timeline-content right">
            <h2>Expansão de Parcerias</h2>
            <p>
              Em 2005, a Agrovale expandiu suas parcerias para exportação, fechando acordos com mercados internacionais. Essa expansão permitiu que a pimenta do reino da Agrovale ganhasse reconhecimento em diversos países.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGlobe size={20} color="#ffffff" />
          </div>
          <div className="timeline-content">
            <h2>Liderança no Mercado</h2>
            <p>
              Hoje, a Agrovale é líder no mercado de pimenta do reino, exportando para mais de 30 países. A empresa continua investindo em tecnologia e sustentabilidade para garantir a qualidade e sabor autêntico do produto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
