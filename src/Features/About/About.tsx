import { Anchor } from '@/src/Components/Anchor';
import { Card } from '@/src/Components/Card';
import { Heading } from '@/src/Components/Heading';
import { Icon } from '@/src/Components/Icons';
import { Paragraph } from '@/src/Components/Paragraph';
import { SectionWrapper } from '@/src/Components/Wrapper';
import { faAward, faDesktop } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { FC } from 'react';

const About = () => {
	return (
		<SectionWrapper
			className="mx-2 mt-28 flex cursor-default flex-col items-center justify-center xs:mx-4"
			id="about"
		>
			<Paragraph variant={'gray'}>Get To Know</Paragraph>
			<Heading variant={'primary'} size={'lg'}>
				About Me
			</Heading>

			<div className="flex flex-col items-center justify-center lg:flex-row">
				<div className="group relative mt-14 flex justify-center lg:ml-8">
					<Image
						src="/Assets/Images/bgpfp2.png"
						alt="Background anime photo"
						width={1024}
						height={1024}
						className="w-[260px] select-none rounded-[50px] transition-all xs:w-[300px] sm:w-[360px] lg:w-[500px]"
					/>
					<Image
						src="/Assets/Images/pfp2.png"
						alt="Renan Sui's photo"
						width={1024}
						height={1024}
						className="absolute left-0 top-0 rotate-12 select-none rounded-[50px] transition-all duration-300 group-hover:rotate-0 group-hover:scale-[1.01]"
					/>
				</div>

				<div className="relative flex flex-col transition-all lg:ml-12 lg:mr-8">
					<div className="mt-16 flex justify-center gap-4 xs:flex-wrap xs:gap-4 md:justify-start">
						<Anchor href="#experience" className="">
							<Card
								variant={'center'}
								size={'small'}
								className="CardLeftPixelEffect px-3 py-6 xs:px-6 md:p-10"
							>
								<Icon
									icon={faAward}
									className="mb-4 h-6 w-6 text-custom-blue-500"
								/>
								<Heading>Experience</Heading>
								<Paragraph variant={'gray'}>
									3+ Years Studying
								</Paragraph>
							</Card>
						</Anchor>
						<Anchor href="#portfolio" className="">
							<Card
								variant={'center'}
								size={'small'}
								className="CardLeftPixelEffect px-3 py-6 xs:px-6 md:p-10"
							>
								<Icon
									icon={faDesktop}
									className="mb-4 h-6 w-6 text-custom-blue-500"
								/>
								<Heading>Projects</Heading>
								<Paragraph variant={'gray'}>
									5+ Completed
								</Paragraph>
							</Card>
						</Anchor>
					</div>

					<Paragraph
						variant={'default'}
						size={'default'}
						className="group my-3 max-w-[35em] text-justify font-light transition-all duration-300 hover:text-custom-blue-400 md:mx-0 md:max-w-[43em] md:text-base"
					>
						Not so recently (2020) I started my self-taught journey
						studying <Emphasize> frontend </Emphasize> development
						and I&apos;m currently learning
						<Emphasize> React/Next.js</Emphasize>. Already having a
						basic understanding of programming (game development in
						2019), I immersed myself in this sea of technologies and
						libraries and found myself taking a liking to the
						<Emphasize>
							{' '}
							design and interactivity of websites
						</Emphasize>
						.
					</Paragraph>

					<Anchor
						href="#contact"
						variant={'primary'}
						size={'sm'}
						className="self-start"
					>
						Let&apos;s Talk
					</Anchor>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default About;

interface EmphasizeProps extends React.HTMLAttributes<HTMLSpanElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

export const Emphasize: FC<EmphasizeProps> = ({ children, ...props }) => {
	return (
		<span
			{...props}
			className="text-custom-blue-400 transition-all duration-300 group-hover:text-white"
		>
			{children}
		</span>
	);
};
