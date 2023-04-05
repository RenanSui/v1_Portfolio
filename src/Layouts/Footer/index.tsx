import { Anchor } from '@/src/Components/Anchor';
import { Heading } from '@/src/Components/Heading';
import { Icon } from '@/src/Components/Icons';
import { Menu, MenuList } from '@/src/Components/Menu';
import { SectionWrapper } from '@/src/Components/Wrapper';
import CapitalizeFirstLetter from '@/src/Utilities/CapitalizeFirstLetter';
import {
	faGithub,
	faLinkedinIn,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

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
					size={'xl_5'}
					className="FooterTitle mt-8 font-semibold tracking-widest"
				>
					RENAN
				</Heading>

				<Menu className="MouseTracker my-12 flex flex-col items-center justify-center md:flex-row">
					{navList.map((navItem) => {
						return (
							<MenuList
								key={navItem}
								className="MouseTracker mx-4 my-3"
							>
								<Anchor
									href={`#${
										navItem === 'home' ? '' : navItem
									}`}
									className="AnchorMouseTracker tracking-wider hover:text-white"
								>
									{CapitalizeFirstLetter(navItem)}
								</Anchor>
							</MenuList>
						);
					})}
				</Menu>

				<div className="mb-28 flex gap-3 xs:mb-32">
					{contactInfo.map((ContactItem) => {
						return (
							<Anchor
								key={ContactItem.id}
								variant={'secondary'}
								href={ContactItem.contactLink}
								target="_blank"
								title={ContactItem.contactType}
								className="AnchorIconMouseTracker group px-4 py-3 hover:rotate-90 lg:px-5 lg:py-4"
							>
								<Icon
									icon={ContactItem.icon}
									className={`pointer-events-none h-5 w-5 text-white group-hover:-rotate-90`}
								/>
							</Anchor>
						);
					})}
				</div>
			</SectionWrapper>
		</footer>
	);
};

export default Footer;
