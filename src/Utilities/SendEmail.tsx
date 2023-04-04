import emailjs from '@emailjs/browser';
import { IContactState } from '../Contexts/Contact/types';

export const SendEmail = (contactState: IContactState) => {
	const serviceID = 'service_b6fdcqg';
	const templateID = 'template_g24nnoh';
	const publicKey = 'mRgUP38HcWu9AM0rY';
	const templateParams = {
		name: contactState.name || '',
		email: contactState.email || '',
		message: contactState.message || '',
	};

	emailjs.send(serviceID, templateID, templateParams, publicKey);
};
