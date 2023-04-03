'use client';
import { Button } from '@/src/Components/Button';
import { ContactCard } from '@/src/Components/Card';
import { IContactInfo } from '@/src/Components/Card/types';
import { Heading } from '@/src/Components/Heading';
import { ContactInput } from '@/src/Components/Input';
import { ContactLabel } from '@/src/Components/Label';
import { Paragraph } from '@/src/Components/Paragraph';
import { ContactTextarea } from '@/src/Components/Textarea';
import { SectionWrapper } from '@/src/Components/Wrapper';
import { ContactContext } from '@/src/Contexts/Contact/ContactContext';
import { IContactPropsInfo } from '@/src/Contexts/Contact/types';
import emailjs from '@emailjs/browser';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useContext, useState } from 'react';
import { MessageSendAlert } from '../Alert';

const contactInfo: IContactInfo[] = [
	{
		id: 1,
		icon: faEnvelope,
		contactType: 'Email',
		contactInformation: 'renanddtao@gmail.com',
		contactLink: 'mailto: renanddtao@gmail.com',
	},
	{
		id: 2,
		icon: faLinkedinIn,
		contactType: 'Linkedin',
		contactInformation: 'renansui',
		contactLink: 'https://www.linkedin.com/in/renansui/',
	},
	{
		id: 3,
		icon: faWhatsapp,
		contactType: 'Whatsapp',
		contactInformation: '+55 71 9 8503 5606',
		contactLink:
			'https://api.whatsapp.com/send?phone=+5571985035606&text=Hello',
	},
];

const INPUT_LABEL: IContactPropsInfo[] = [
	{
		id: 1,
		type: 'name',
		actionType: 'changeName',
		labelPlaceholder: 'Your Full Name',
	},
	{
		id: 2,
		type: 'email',
		actionType: 'changeEmail',
		labelPlaceholder: 'Your Email',
	},
	{
		id: 3,
		type: 'message',
		actionType: 'changeMessage',
		labelPlaceholder: 'Your Message',
	},
];

const Contact = () => {
	const { contactState, dispatch } = useContext(ContactContext);
	const [isSended, setIsSended] = useState(false);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const serviceID = 'service_b6fdcqg';
		const templateID = 'template_g24nnoh';
		const publicKey = 'mRgUP38HcWu9AM0rY';
		const templateParams = {
			name: contactState.name || '',
			email: contactState.email || '',
			message: contactState.message || '',
		};

		emailjs.send(serviceID, templateID, templateParams, publicKey);

		dispatch({ type: 'changeName', payload: '' });
		dispatch({ type: 'changeEmail', payload: '' });
		dispatch({ type: 'changeMessage', payload: '' });

		setIsSended(true);
		setTimeout(() => {
			setIsSended(false);
		}, 3000);
	};

	return (
		<SectionWrapper id="contact" className="relative">
			<>
				<Paragraph variant={'gray'}>Get in Touch</Paragraph>
				<Heading variant={'primary'} size={'lg'}>
					Contact Me
				</Heading>

				<div className="lg:flex">
					<div className="my-4 flex flex-wrap justify-center gap-4 transition-all duration-700 lg:mx-5 lg:flex-col">
						{contactInfo.map((contact) => (
							<ContactCard key={contact.id} contact={contact} />
						))}
					</div>

					<form
						className="relative mx-3 mt-4 flex flex-col items-center gap-4 rounded-md text-custom-gray-100 transition-all duration-700"
						onSubmit={(e) => sendEmail(e)}
					>
						{INPUT_LABEL.map((inputLabel) => (
							<div
								className="relative flex w-full max-w-[300px] justify-center transition-all duration-700 xs:max-w-[380px]"
								key={inputLabel.id}
							>
								{inputLabel.type === 'message' ? (
									<ContactTextarea inputLabel={inputLabel} />
								) : (
									<ContactInput inputLabel={inputLabel} />
								)}
								<ContactLabel inputLabel={inputLabel} />
							</div>
						))}

						<Button variant={'primary'} type="submit">
							Send Message
						</Button>
						<div className="text-2xl text-white">
							{isSended && <MessageSendAlert />}
						</div>
					</form>
				</div>
			</>
		</SectionWrapper>
	);
};

export default Contact;
