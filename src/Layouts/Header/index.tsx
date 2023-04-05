import { Anchor } from '@/src/Components/Anchor';
import { Heading } from '@/src/Components/Heading';
import { Paragraph } from '@/src/Components/Paragraph';
import Image from 'next/image';
import { SectionWrapper } from '../../Components/Wrapper';

const Header = () => {
	return (
		<header>
			<SectionWrapper
				id="header"
				className="mt-0 pt-36 font-josefin text-white"
			>
				<Paragraph size={'base'}>Hello, I&apos;m</Paragraph>
				<Heading size={'xl_5'}>Renan Sui</Heading>
				<Paragraph variant={'secondary'} size={'base'}>
					Frontend Developer
				</Paragraph>

				<div className="mt-8">
					<Anchor
						variant={'outline'}
						size={'md'}
						href="https://cdn.discordapp.com/attachments/946119540356575343/1090621020278358088/Profile.pdf"
					>
						Download CV
					</Anchor>
					<Anchor
						variant={'primary'}
						size={'md'}
						href="#contact"
						className="ml-4"
					>
						Let&apos;s Talk
					</Anchor>
				</div>

				<div className="mx-5">
					<Image
						src="/Assets/Images/pfp2.png"
						alt="Renan Sui's photo"
						width={500}
						height={500}
						className="relative z-10 mt-12 select-none rounded-full"
					/>
				</div>
			</SectionWrapper>
		</header>
	);
};

export default Header;
