import React from 'react';

import { faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<div className="container">
				<h1 className="contact__title">Vamos manter contato?</h1>
				<form className="contact__form">
					<input className="contact__form-input" type="email" placeholder="Email" />
					<input className="contact__form-input" type="text" placeholder="Nome Completo" />
					<textarea className="contact__form-textarea" placeholder="Menssagem" />
					<input className="contact__form-submit" type="submit" value="Enviar" />
				</form>
				<div className="contact__connections">
					<h2>Vamos nos conectar?</h2>
					<a href="https://www.behance.net/clr3008d1f0" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faBehance} size="2x" />
					</a>
					<a
						href="https://www.instagram.com/crisr.fotografias/?hl=pt-br"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faInstagram} size="2x" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
