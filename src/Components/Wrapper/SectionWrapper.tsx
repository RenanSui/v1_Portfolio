'use client';
import { FC, useEffect, useRef } from 'react';

export type SectionWrapperProps = {
	children: string | JSX.Element | JSX.Element[];
	className?: string;
	id: string;
};

const SectionWrapper: FC<SectionWrapperProps> = ({
	children,
	className,
	id,
}) => {
	const section = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const windowScroll = () => {
			if (section.current) {
				const currentSectionPosition = section.current?.offsetTop;
				const sectionHeight = section.current?.clientHeight;
				const windowCurrentScrollY = window.scrollY + 2;

				if (
					windowCurrentScrollY > currentSectionPosition &&
					windowCurrentScrollY <
						currentSectionPosition + sectionHeight
				) {
					document.body.setAttribute(
						'data-nav',
						id === 'header' ? 'home' : id
					);
				}
			}
		};

		document.addEventListener('scroll', windowScroll);

		return () => {
			document.removeEventListener('scroll', windowScroll);
		};
	});

	return (
		<section
			ref={section}
			id={id}
			className={`m-auto mt-28 flex max-w-[1440px] cursor-default flex-col items-center justify-center pt-8  ${className}`}
		>
			{children}
		</section>
	);
};

export default SectionWrapper;
