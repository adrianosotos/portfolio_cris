import React from 'react';
import Layout from '../Components/Layout';

import '../Styles/form.css';
import '../Styles/contact.css';
import '../Styles/connections.css';
import { faFacebookSquare, faTwitterSquare, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
	return (
		<Layout>
			<div className="container height">
				<div className="contact">
					<div className="form">
						<h1 className="form__title">Vamos manter contato?</h1>
						<form>
							<input className="form__item" type="email" placeholder="Email" />
							<input className="form__item" type="text" placeholder="Nome Completo" />
							<textarea className="form__item-text-area" placeholder="Menssagem" />
							<input className="form__button" type="submit" value="Enviar" />
						</form>
					</div>
					<div className="connections">
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
			</div>
		</Layout>
	);
};

export default Contact;
