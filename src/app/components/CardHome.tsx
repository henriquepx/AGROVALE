import { Globe, Leaf, Sprout } from "lucide-react";
import "../sass/components/_cardhome.scss";

const CardHome = () => {
	return (
		<div className="cardhome">
			<div className="cardhome-container">
				<div className="card-unit">
					<div className="card-unit-header">
						<span>
							<Sprout />
						</span>
						<h2>Melhor agro do Brasil</h2>
					</div>
					<p>
						Nossa excelência começa no campo e chega até você com
						produtos de qualidade e exportação confiável.
					</p>
				</div>

				<div className="card-unit">
					<div className="card-unit-header">
						<span>
							<Leaf />
						</span>
						<h2>Do Plantio à Exportação</h2>
					</div>
					<p>
						Cuidamos de cada etapa do processo, garantindo produtos
						frescos, rastreáveis e prontos para o mercado
						internacional.
					</p>
				</div>

				<div className="card-unit">
					<div className="card-unit-header">
						<span>
							<Globe />
						</span>
						<h2>Fornecimento Global</h2>
					</div>
					<p>
						Levamos o melhor da agricultura brasileira para clientes
						ao redor do mundo com segurança e rapidez.
					</p>
				</div>
			</div>
		</div>
	);
};

export default CardHome;
