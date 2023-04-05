import { Heading } from '@/src/Components/Heading';
import { SectionWrapper } from '@/src/Components/Wrapper';
import CapitalizeFirstLetter from '@/src/Utilities/CapitalizeFirstLetter';
import {
	faGithub,
	faLinkedinIn,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navList = ['home', 'about', 'experience', 'portfolio', 'contact'];

const contactInfo = [
	{
		id: 1,
		icon: faGithub,
		contactType: 'Github',
		contactLink: 'https://github.com/RenanSui',
	},
	{
		id: 2,
		icon: faLinkedinIn,
		contactType: 'Linkedin',
		contactLink: 'https://www.linkedin.com/in/renansui/',
	},
	{
		id: 3,
		icon: faWhatsapp,
		contactType: 'Whatsapp',
		contactLink:
			'https://api.whatsapp.com/send?phone=+5571985035606&text=Hello',
	},
];

const Footer = () => {
	return (
		<footer id="" className="bg-custom-blue-500 text-custom-darkBlue-900">
			<SectionWrapper id="footer" className={'MouseTracker mt-28 pt-8'}>
				<Heading
					variant={'tertiary'}
					size={'xl_3'}
					className="FooterTitle mt-8 font-semibold tracking-widest"
				>
					RENAN
				</Heading>
				<ul className="MouseTracker my-8 flex flex-col items-center justify-center md:flex-row">
					{navList.map((navItem) => (
						<li key={navItem} className="MouseTracker mx-4 my-3">
							<a
								id=""
								href={`#${navItem === 'home' ? '' : navItem}`}
								className="AnchorMouseTracker tracking-wider hover:text-white"
							>
								{CapitalizeFirstLetter(navItem)}
							</a>
						</li>
					))}
				</ul>
				<span className="mb-28 flex gap-3 xs:mb-32">
					{contactInfo.map((contactItem) => (
						<a
							className="AnchorIconMouseTracker group rounded-xl bg-custom-darkBlue-900 p-3 transition-all duration-300 hover:rotate-90 hover:bg-custom-blue-900 lg:p-4"
							href={contactItem.contactLink}
							key={contactItem.id}
							target="_blank"
							rel="noreferrer"
							title={contactItem.contactType}
						>
							<FontAwesomeIcon
								icon={contactItem.icon}
								className={`pointer-events-none h-4 w-4 text-white transition-all duration-500 group-hover:-rotate-90`}
							/>
						</a>
					))}
				</span>
			</SectionWrapper>
		</footer>
	);
};

export default Footer;
