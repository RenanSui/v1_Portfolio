import { mergeClass } from '@/src/Utilities/mergeClass';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

const headingVariants = cva('transition-all duration-300', {
	variants: {
		variant: {
			default: 'text-white',
			primary: 'text-custom-blue-500',
			secondary: 'text-custom-blue-300',
			tertiary: 'text-custom-darkBlue-900',
			gray: 'text-custom-gray-100',
		},
		size: {
			default: 'text-xl',
			base: 'text-base',
			lg: 'text-2xl md:text-4xl',
			xl_5: 'text-5xl',
			xl_3: 'text-3xl',
		},
	},

	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

interface HeadingProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {
	children?: string | JSX.Element | JSX.Element[];
}

const Heading: FC<HeadingProps> = ({
	children,
	className,
	size,
	variant,
	...props
}) => {
	return (
		<h1
			{...props}
			className={mergeClass(
				headingVariants({ variant, size, className })
			)}
		>
			{children}
		</h1>
	);
};

export { Heading, headingVariants };
