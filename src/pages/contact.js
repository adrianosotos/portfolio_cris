import React from 'react';
import Layout from '../Components/Layout';

import '../Styles/form.css';
import '../Styles/contact.css';
import '../Styles/connections.css';
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
	return (
		<Layout>
			<div className="container">
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
						<a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faFacebookSquare} size="2x" />
						</a>
						<a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faTwitterSquare} size="2x" />
						</a>
						<a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faInstagram} size="2x" />
						</a>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
