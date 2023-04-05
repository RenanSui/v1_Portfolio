import { mergeClass } from '@/src/Utilities/mergeClass';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

const MenuVariants = cva('relative transition-all duration-300 z-10', {
	variants: {
		variant: {
			default: '',
			icon: 'flex px-5 py-1 transition-all duration-500 xs:px-7 xs:py-4',
		},
		size: {
			default: '',
			base: 'gap-1 px-5 py-2 xs:px-7 xs:py-4',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

interface MenuProps
	extends React.HTMLAttributes<HTMLUListElement>,
		VariantProps<typeof MenuVariants> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const Menu: FC<MenuProps> = ({
	children,
	className,
	size,
	variant,
	...props
}) => {
	return (
		<ul
			{...props}
			className={mergeClass(MenuVariants({ variant, size, className }))}
		>
			{children}
		</ul>
	);
};

export default Menu;
