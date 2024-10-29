import Image from "next/image"

const Team = () => {
    return (
        <section className="team">
            <div className="team-info">
               <Image className="team-img" src="/agro.jpg" alt="Agro Time" layout="responsive"  width={450} height={450} />
                <div className="team-text">
                    <h1>Nossa Equipe: <br />Compromisso e Expertise <br />no Agronegócio</h1>
                    <p>Na AgroVale, nossa equipe é formada por <span className="bold">profissionais apaixonados</span> pelo agronegócio, com vasta experiência e comprometidos com a excelência em cada etapa do processo, do plantio à exportação. <span className="bold">Trabalhamos juntos</span> para garantir produtos de alta qualidade, como nossa pimenta-do-reino, e buscamos sempre inovação para atender nossos clientes com <span className="bold">eficiência e cuidado</span>.</p>
                    <div className="team-marker">
                        <p>Cultivamos não apenas produtos, mas também resultados excepcionais.</p>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Team
