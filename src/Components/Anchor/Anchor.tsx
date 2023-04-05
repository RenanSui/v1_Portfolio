import { mergeClass } from '@/src/Utilities/mergeClass';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

const anchorVariants = cva(
	'relative transition-all duration-300 z-10 rounded-md',
	{
		variants: {
			variant: {
				default: '',
				primary:
					'bg-custom-blue-500 text-black hover:bg-custom-blue-800 hover:text-white rounded-md',
				secondary:
					'bg-custom-darkBlue-900 text-black hover:bg-custom-blue-900 hover:text-white rounded-xl',
				outline:
					'bg-transparent border text-custom-blue-300 border-custom-blue-300 hover:bg-custom-blue-800 hover:text-white hover:border-custom-blue-800 rounded-md',
				icon: 'rounded-full transition-all duration-500',
			},
			size: {
				default: '',
				sm: 'px-5 py-3',
				md: 'px-6 py-5',
				icon: 'px-3 py-2 xs:px-4 xs:py-3',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

interface AnchorProps
	extends React.HTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof anchorVariants> {
	children?: string | JSX.Element | JSX.Element[];
	href: string;
	target?: React.HTMLAttributeAnchorTarget | undefined;
}

const Anchor: FC<AnchorProps> = ({
	children,
	className,
	size,
	variant,
	...props
}) => {
	return (
		<a
			className={mergeClass(anchorVariants({ variant, size, className }))}
			{...props}
		>
			{children}
		</a>
	);
};

export { Anchor, anchorVariants };
