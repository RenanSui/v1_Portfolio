import emailjs from '@emailjs/browser';
import { MessageData } from '../Features/Contact';

export const SendEmail = (data: MessageData) => {
	const { fullName, email, message } = data;

	const serviceID = 'service_b6fdcqg';
	const templateID = 'template_g24nnoh';
	const publicKey = 'mRgUP38HcWu9AM0rY';
	const templateParams = {
		name: fullName,
		email: email,
		message: message,
	};

	emailjs.send(serviceID, templateID, templateParams, publicKey);
};
