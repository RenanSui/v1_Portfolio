'use client';
import CapitalizeFirstLetter from '@/src/Utilities/CapitalizeFirstLetter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { NavListProps } from './types';

const NavListItems = ({ navItem }: NavListProps) => {
	const { hrefLink, icon, id, titleName } = navItem;
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		document.body.setAttribute('data-nav', 'home');
		const dataNavAttr = document.body.getAttribute('data-nav');
		const isActive = titleName === dataNavAttr;
		setIsActive(isActive);
	}, [titleName]);

	useEffect(() => {
		const windowScroll = () => {
			const dataNavAttr = document.body.getAttribute('data-nav');
			const isActive = titleName === dataNavAttr;
			setIsActive(isActive);
		};

		document.addEventListener('scroll', windowScroll);

		return () => {
			document.removeEventListener('scroll', windowScroll);
		};
	});

	return (
		<li key={id} id={String(id)} title={CapitalizeFirstLetter(titleName)}>
			<a
				className={`block cursor-pointer rounded-full px-4 py-3 transition-all duration-500 xs:mx-2 ${
					isActive
						? 'bg-custom-blue-900'
						: 'hover:bg-custom-darkBlue-900'
				}`}
				href={`${hrefLink}`}
			>
				<FontAwesomeIcon
					icon={icon}
					className={`h-4 max-h-[16px] w-4 max-w-[16px] text-custom-gray-100 transition-all duration-500 ${
						isActive ? 'text-white' : ''
					}`}
				/>
			</a>
		</li>
	);
};

export default NavListItems;
