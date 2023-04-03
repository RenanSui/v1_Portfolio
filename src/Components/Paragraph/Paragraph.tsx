import { mergeClass } from '@/src/Utilities/mergeClass';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

const paragraphVariants = cva('transition-all duration-300', {
	variants: {
		variant: {
			default: 'text-white',
			primary: 'text-custom-blue-500',
			secondary: 'text-custom-blue-300',
			tertiary: 'text-custom-darkBlue-900',
			gray: 'text-custom-gray-100',
		},
		size: {
			default: 'text-sm',
			base: 'text-base',
			lg: 'text-2xl',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

interface ParagraphProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof paragraphVariants> {
	children?: string | JSX.Element | JSX.Element[];
}

const Paragraph: FC<ParagraphProps> = ({
	children,
	className,
	size,
	variant,
	...props
}) => {
	return (
		<p
			{...props}
			className={mergeClass(
				paragraphVariants({ variant, size, className })
			)}
		>
			{children}
		</p>
	);
};

export { Paragraph, paragraphVariants };
