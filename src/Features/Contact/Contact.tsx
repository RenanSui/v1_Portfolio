'use client';
import { Anchor } from '@/src/Components/Anchor';
import { Button } from '@/src/Components/Button';
import { Card } from '@/src/Components/Card';
import { FormField } from '@/src/Components/Forms/FormField';
import { GroupForm } from '@/src/Components/Forms/GroupForm';
import { Heading } from '@/src/Components/Heading';
import { Icon } from '@/src/Components/Icons/';
import { Input } from '@/src/Components/Input';
import { Label } from '@/src/Components/Label';
import { Paragraph } from '@/src/Components/Paragraph';
import { TextArea } from '@/src/Components/Textarea';
import { SectionWrapper } from '@/src/Components/Wrapper';
import CapitalizeWords from '@/src/Utilities/CapitalizeWords';
import { SendEmail } from '@/src/Utilities/SendEmail';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Alert } from '../Alert';

export type MessageData = z.infer<typeof messageSchema>;

const messageSchema = z.object({
	fullName: z
		.string()
		.nonempty('Name is required')
		.toLowerCase()
		.min(2, 'Name must contain at least 2 character(s).')
		.transform((name) => CapitalizeWords(name)),
	email: z.string().nonempty('Email is required.').email().toLowerCase(),
	message: z.string().nonempty('Message is required.'),
});

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		watch,
		reset,
	} = useForm<MessageData>({ resolver: zodResolver(messageSchema) });

	const handleSendEmail = (data: MessageData) => {
		SendEmail(data);

		setTimeout(() => {
			reset({ fullName: '', email: '', message: '' });
		}, 3 * 1000);
	};

	return (
		<SectionWrapper id="contact" className="relative">
			<Paragraph variant={'gray'}>Get in Touch</Paragraph>
			<Heading variant={'primary'} size={'lg'}>
				Contact Me
			</Heading>

			<div className="my-4 gap-4 lg:flex">
				<div className="flex flex-wrap justify-center gap-4 transition-all duration-700 lg:flex-col">
					<Anchor href="mailto: renanddtao@gmail.com" target="_blank">
						<Card variant={'center'} className="gap-1 p-6 md:p-10">
							<Icon
								icon={faEnvelope}
								className="my-3 text-white"
							></Icon>
							<Heading size={'base'}>Email</Heading>
							<Paragraph size={'base'} variant={'gray'}>
								renanddtao@gmail.com
							</Paragraph>
							<Paragraph size={'base'} variant={'primary'}>
								Send a message
							</Paragraph>
						</Card>
					</Anchor>
					<Anchor
						href="https://www.linkedin.com/in/renansui/"
						target="_blank"
					>
						<Card variant={'center'} className="gap-1 p-6 md:p-10">
							<Icon
								icon={faLinkedinIn}
								className="my-3 text-white"
							></Icon>
							<Heading size={'base'}>Linkedin</Heading>
							<Paragraph size={'base'} variant={'gray'}>
								renansui
							</Paragraph>
							<Paragraph size={'base'} variant={'primary'}>
								Send a message
							</Paragraph>
						</Card>
					</Anchor>
					<Anchor
						href="https://api.whatsapp.com/send?phone=+5571985035606&text=Hello"
						target="_blank"
					>
						<Card variant={'center'} className="gap-1 p-6 md:p-10">
							<Icon
								icon={faEnvelope}
								className="my-3 text-white"
							></Icon>
							<Heading size={'base'}>Whatsapp</Heading>
							<Paragraph size={'base'} variant={'gray'}>
								+55 71 9 8503 5606
							</Paragraph>
							<Paragraph size={'base'} variant={'primary'}>
								Send a message
							</Paragraph>
						</Card>
					</Anchor>
				</div>

				<GroupForm
					onSubmit={handleSubmit(handleSendEmail)}
					className="mt-4"
				>
					<FormField className="flex flex-col gap-2">
						<Input
							type="string"
							{...register('fullName')}
							disabled={isSubmitting}
						/>
						<Label htmlFor="name" watchValue={watch('fullName')}>
							Your Full Name
						</Label>
						{errors.fullName?.message ? (
							<Paragraph className="ml-2">
								{errors.fullName?.message}
							</Paragraph>
						) : (
							''
						)}
					</FormField>

					<FormField className="flex flex-col gap-2">
						<Input
							type="string"
							{...register('email')}
							disabled={isSubmitting}
						/>
						<Label htmlFor="email" watchValue={watch('email')}>
							Your Email
						</Label>
						{errors.email?.message ? (
							<Paragraph className="ml-2">
								{errors.email?.message}
							</Paragraph>
						) : (
							''
						)}
					</FormField>

					<FormField className="flex flex-col gap-2">
						<TextArea
							type="string"
							{...register('message')}
							disabled={isSubmitting}
						/>
						<Label htmlFor="message" watchValue={watch('message')}>
							Your Message
						</Label>
						{errors.message?.message ? (
							<Paragraph className="ml-2">
								{errors.message?.message}
							</Paragraph>
						) : (
							''
						)}
					</FormField>

					<Button
						variant={'primary'}
						type="submit"
						disabled={isSubmitting}
					>
						Send Message
					</Button>
				</GroupForm>

				{isSubmitSuccessful ? <Alert>Message Sended</Alert> : ''}
			</div>
		</SectionWrapper>
	);
};

export default Contact;
