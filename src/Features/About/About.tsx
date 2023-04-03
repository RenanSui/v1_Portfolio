import { Anchor } from '@/src/Components/Anchor';
import { SmallCard } from '@/src/Components/Card';
import { Heading } from '@/src/Components/Heading';
import { Paragraph } from '@/src/Components/Paragraph';
import { SectionWrapper } from '@/src/Components/Wrapper';
import { faAward, faDesktop } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const About = () => {
	return (
		<SectionWrapper
			className="mt-28 flex cursor-default flex-col items-center justify-center"
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
					<div className="mt-16 flex flex-wrap justify-center gap-4 md:justify-start">
						<SmallCard
							title={'Experience'}
							topic={'experience'}
							message={'3+ Years Studying'}
							icon={faAward}
						/>
						<SmallCard
							title={'Projects'}
							topic={'portfolio'}
							message={'5+ Completed'}
							icon={faDesktop}
						/>
					</div>

					<p className="group mx-3 mb-3 mt-3 max-w-[35em] text-justify text-sm font-light text-white transition-all duration-300 hover:text-custom-blue-400 md:mx-0 md:mb-6 md:mt-6 md:max-w-[43em] md:text-base">
						Not so recently (2020) I started my self-taught journey
						studying front-end development and I&apos;m currently
						learning React/Next.js. Already having a basic
						understanding of programming (game development in 2019),
						I immersed myself in this sea of technologies and
						libraries and found myself taking a liking to the design
						and interactivity of websites.
						<span className="block transition-all duration-300">
							Check out my{' '}
							<ExternalLink href="https://www.github.com/RenanSui">
								Github
							</ExternalLink>{' '}
							profile
						</span>
						<span className="transition-all duration-300">
							Also my{' '}
							<ExternalLink href="https://www.linkedin.com/in/renansui/">
								Linkedin
							</ExternalLink>
						</span>
					</p>
					<span>
						{/* <PrimaryButton href="#contact" className="">
							Let&apos;s Talk
						</PrimaryButton> */}
						<Anchor variant={'primary'} href="#contact">
							Let&apos;s Talk
						</Anchor>
					</span>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default About;

const ExternalLink = ({
	children,
	href,
	className,
}: {
	children: string | JSX.Element | JSX.Element[];
	href: string;
	className?: string;
}) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className={`cursor-pointer font-light text-custom-blue-400 transition-all duration-300 group-hover:text-white ${className}`}
		>
			{children}
		</a>
	);
};
