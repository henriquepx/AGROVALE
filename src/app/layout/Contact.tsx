"use client";
import '../sass/layout/_contact.scss';
import { useState, ChangeEvent, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const whatsappMessage = `Nome: ${name}%0A%0AEmail: ${email}%0A%0AAssunto: ${subject}%0A%0AMensagem: ${message}`;
    const whatsappNumber = '27995306419';
    
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className='contact-container'>
        <div className="contact-text">
          <div className="title">
            <h3 className='title-contact'>Detalhes de Contato</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <br />incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="info">
            <i className="fas fa-mobile-alt"></i>
            <h4>TELEFONE :<br /><span>(27) 99530-6419</span></h4>
          </div>
          <div className="info">
            <i className="far fa-envelope"></i>
            <h4>EMAIL :<br /><span>agrovaleimportacao@gmail.com</span></h4>
          </div>
          <div className="info">
            <i className="fas fa-map-marker-alt"></i>
            <h4>REDES SOCIAIS :<br /><span>Facebook: Agrovale Importação e Exportação <br />Instagram : @agrovale_cafeepimenta<br /></span></h4>
          </div>
          <div className="info">
            <i className="fas fa-map-marker-alt"></i>
            <h4>ENDEREÇO :<br /><span>Vila Valéiro - ES Córrego do Guati, Zona Rural - 29785-000</span></h4>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group full-width">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group full-width">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group full-width">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Assunto"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group full-width">
              <textarea
                className="form-control"
                placeholder="Mensagem"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="btn" type="submit">Enviar Agora!</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
