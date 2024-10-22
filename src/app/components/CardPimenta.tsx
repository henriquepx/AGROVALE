import Image from "next/image";

const CardPimenta = () => {
    return (
        <section className="pimenta">
            <div className="pimenta-info">
                <div className="pimenta-text">
                    <h1>Pimenta-do-Reino: <br />Sabor e Tradição <br />no Agronegócio</h1>
                    <p>Na AgroVale, valorizamos cada grão de pimenta-do-reino, garantindo qualidade em todas as etapas, do cultivo à exportação. Com nossa <span className="bold">experiência</span> e <span className="bold">comprometimento</span>, entregamos um produto que atende aos mais altos padrões.</p>
                    <div className="pimenta-details">
                        <p>Essa especiaria popular é reconhecida pelo sabor picante e propriedades benéficas à saúde, como a promoção da digestão e efeitos antioxidantes, sendo amplamente utilizada em cozinhas ao redor do mundo.</p>
                    </div>
                    <div className="pimenta-marker">
                        <p><span className="doyouknow">Você sabia?</span><br />A pimenta-do-reino já foi considerada tão valiosa que era usada como moeda de troca na Europa. Além disso, sua demanda impulsionou rotas de comércio e expedições históricas.</p>
                    </div>
                </div>
                <div className="imgs-pimenta">
                    <Image className="pimenta-img" src="/pimentaimg.jpg" alt="Agro Time" width={700} height={700} />
                    <img className="pimenta-all-img" src="/pimentadoreino.png" alt="Pimenta do Reino" />
                </div>
            </div>
        </section>
    );
}

export default CardPimenta;
