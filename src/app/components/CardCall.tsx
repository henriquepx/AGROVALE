const CardCall = () => {
    return (
      <div className="container-call">
      <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7544.928805458479!2d-40.39979445609895!3d-18.999247151159796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb67202e86030eb:0xfa8f2eaf136f38d0!2sVila Valério, ES, 29785-000!5e0!3m2!1spt-BR!2sbr!4v1729804478396!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
    </div>
    )
}

export default CardCall
