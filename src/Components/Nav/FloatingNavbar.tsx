'use client';
import CapitalizeFirstLetter from '@/src/Utilities/CapitalizeFirstLetter';
import {
	faBolt,
	faBriefcase,
	faEnvelope,
	faHouse,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Anchor } from '../Anchor';
import { Icon } from '../Icons';
import { Menu, MenuList } from '../Menu';

const navList = [
	{
		id: 1,
		titleName: 'home',
		icon: faHouse,
		active: true,
		hrefLink: '#',
	},
	{
		id: 2,
		titleName: 'about',
		icon: faUser,
		active: false,
		hrefLink: '#about',
	},
	{
		id: 3,
		titleName: 'experience',
		icon: faBolt,
		active: false,
		hrefLink: '#experience',
	},
	{
		id: 4,
		titleName: 'portfolio',
		icon: faBriefcase,
		active: false,
		hrefLink: '#portfolio',
	},
	{
		id: 5,
		titleName: 'contact',
		icon: faEnvelope,
		active: false,
		hrefLink: '#contact',
	},
];

const FloatingNavbar = () => {
	const [MenuActive, setMenuActive] = useState('home');

	useEffect(() => {
		const windowScroll = () => {
			const dataNavAttr = document.body.getAttribute('data-nav');
			const MenuItem = dataNavAttr ? dataNavAttr : '';
			setMenuActive(MenuItem);
		};

		document.addEventListener('scroll', windowScroll);

		return () => {
			document.removeEventListener('scroll', windowScroll);
		};
	});

	return (
		<nav className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full bg-transparent-30 backdrop-blur-lg transition-all duration-500">
			<Menu variant={'icon'} size={'base'} className="gap-2">
				{navList.map((navItem) => (
					<MenuList
						key={navItem.id}
						id={String(navItem.id)}
						title={CapitalizeFirstLetter(navItem.titleName)}
						className="py-1 xs:py-0"
					>
						<Anchor
							variant={'icon'}
							size={'icon'}
							href={navItem.hrefLink}
							className={`${
								MenuActive === navItem.titleName
									? 'bg-custom-blue-900'
									: 'hover:bg-custom-darkBlue-900'
							}`}
						>
							<Icon
								icon={navItem.icon}
								className={`text-custom-gray-100 ${
									MenuActive === navItem.titleName
										? 'text-white'
										: ''
								}`}
							/>
						</Anchor>
					</MenuList>
				))}
			</Menu>
		</nav>
	);
};

export default FloatingNavbar;
