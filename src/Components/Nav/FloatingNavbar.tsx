'use client';
import {
	faBolt,
	faBriefcase,
	faEnvelope,
	faHouse,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
// import NavListItems from './NavListItems';
import CapitalizeFirstLetter from '@/src/Utilities/CapitalizeFirstLetter';
import { Anchor } from '../Anchor';
import { Icon } from '../Icons';
import { Menu, MenuList } from '../Menu';
import { INavList } from './types';

const navList: INavList[] = [
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
	const isActive = true;

	return (
		<nav className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full bg-transparent-30 backdrop-blur-lg transition-all duration-500">
			<Menu variant={'icon'} size={'base'} className="gap-2">
				{navList.map((navItem) => (
					<MenuList
						key={navItem.id}
						id={String(navItem.id)}
						title={CapitalizeFirstLetter(navItem.titleName)}
					>
						<Anchor
							variant={'icon'}
							size={'icon'}
							href={navItem.hrefLink}
							className="bg-gray-600"
						>
							<Icon icon={navItem.icon} />
						</Anchor>
					</MenuList>
				))}
			</Menu>
		</nav>
	);
};

export default FloatingNavbar;

{
	/* <nav className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full bg-transparent-30 backdrop-blur-lg transition-all duration-500">
	<ul className="flex px-5 py-1 transition-all duration-500 xs:px-7 xs:py-3"></ul>
	<ul>
		{navList.map((navItem) => (
			<>
				<li
					key={navItem.id}
					id={String(navItem.id)}
					title={CapitalizeFirstLetter(navItem.titleName)}
				>
					<Anchor variant={'icon'} href={navItem.hrefLink}>
						<Icon
							icon={navItem.icon}
							className="max-h-[16px] max-w-[16px] text-custom-gray-100"
						/>
					</Anchor>
				</li>
			</>
		))}
		{navList.map((navItem) => (
			<MenuList
				key={navItem.id}
				id={String(navItem.id)}
				title={CapitalizeFirstLetter(navItem.titleName)}
			>
				<Anchor variant={'icon'} href={navItem.hrefLink}>
					<Icon icon={navItem.icon} />
				</Anchor>
			</MenuList>
		))}
		{navList.map((navItem) => (
			<NavListItems navItem={navItem} key={navItem.id} />
		))}
	</ul>
</nav>; */
}
