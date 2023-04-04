'use client';
import { Button } from '@/src/Components/Button';
import { ContactCard } from '@/src/Components/Card';
import { IContactInfo } from '@/src/Components/Card/types';
import { FormField } from '@/src/Components/Forms/FormField';
import { GroupForm } from '@/src/Components/Forms/GroupForm';
import { Heading } from '@/src/Components/Heading';
import { Input } from '@/src/Components/Input';
import { Label } from '@/src/Components/Label';
import { Paragraph } from '@/src/Components/Paragraph';
import { TextArea } from '@/src/Components/Textarea';
import { SectionWrapper } from '@/src/Components/Wrapper';
import { ContactContext } from '@/src/Contexts/Contact/ContactContext';
import { SendEmail } from '@/src/Utilities/SendEmail';
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

const Contact = () => {
	const [isSended, setIsSended] = useState(false);
	const { contactState, dispatch } = useContext(ContactContext);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		SendEmail(contactState);
		dispatch({ type: 'resetForm' });

		setIsSended(true);
		setTimeout(() => {
			setIsSended(false);
		}, 3000);
	};

	return (
		<SectionWrapper id="contact" className="relative">
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

				<GroupForm onSubmit={handleSubmit}>
					<FormField>
						<Input type="name" actionType="changeName" />
						<Label htmlFor="name">Your Full Name</Label>
					</FormField>
					<FormField>
						<Input type="email" actionType="changeEmail" />
						<Label htmlFor="email">Your Email</Label>
					</FormField>
					<FormField>
						<TextArea type="message" actionType="changeMessage" />
						<Label htmlFor="message">Your Message</Label>
					</FormField>

					<Button variant={'primary'} type="submit">
						Send Message
					</Button>
				</GroupForm>
				{isSended && <MessageSendAlert />}
			</div>
		</SectionWrapper>
	);
};

export default Contact;
