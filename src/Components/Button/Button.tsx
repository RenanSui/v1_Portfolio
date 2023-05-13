import { mergeClass } from '@/src/Utilities/mergeClass';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

const ButtonVariants = cva(
	'relative transition-all duration-300 z-10 rounded-md',
	{
		variants: {
			variant: {
				default: 'text-white bg-black hover:text-black hover:bg-white',
				primary:
					'bg-custom-blue-500 text-black hover:bg-custom-blue-800 hover:text-white',
				outline:
					'bg-transparent border text-custom-blue-300 border-custom-blue-500 hover:bg-custom-blue-800 hover:text-white hover:border-custom-blue-800',
			},
			size: {
				default: 'px-5 py-3',
				sm: 'px-5 py-2',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

interface ButtonProps
	extends React.HTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof ButtonVariants> {
	children?: string | JSX.Element | JSX.Element[];
	type?: 'button' | 'submit' | 'reset' | undefined;
	disabled: boolean;
}

const Button: FC<ButtonProps> = ({
	children,
	className,
	size,
	variant,
	...props
}) => {
	return (
		<button
			{...props}
			className={mergeClass(ButtonVariants({ variant, size, className }))}
		>
			{children}
		</button>
	);
};

export { Button, ButtonVariants };
