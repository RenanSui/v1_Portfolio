import { mergeClass } from '@/src/Utilities/mergeClass';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

const cardVariants = cva(
	'z-10 flex flex-col relative border border-custom-blue-900 bg-custom-blue-900 transition-all duration-300 hover:bg-transparent',
	{
		variants: {
			variant: {
				default: 'rounded-xl items-start justify-start',
				center: 'rounded-xl items-center justify-center',
				between: 'rounded-xl items-center justify-between',
				// Small: 'cursor-default flex-col items-center justify-center rounded-xl',
				// XLarge: 'mx-2 cursor-default flex-col items-center justify-center rounded-xl pb-4',
				// YLarge: 'group flex-col justify-between overflow-hidden rounded-2xl p-4',
			},
			size: {
				default: 'w-[300px] xs:w-[380px]',
				small: 'w-[140px] xs:w-[180px] sm:w-[220px]',
				medium: 'w-[300px] xs:w-[380px]',
				large: 'max-w-[500px]',
				// default: 'h-[180px] w-[300px] xs:w-[380px] md:h-[200px]',
				// small: 'h-[140px] w-[142px] xs:h-[170px] xs:w-[190px] sm:h-[200px] sm:w-[220px]',
				// medium: 'w-[300px] xs:w-[380px]',
				// large: 'max-w-[500px]',
			},
			fullWidth: {
				true: 'w-full',
			},
			pixelEffect: {
				true: 'CardLeftPixelEffect',
			},
		},

		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

interface CardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {
	children?: string | JSX.Element | JSX.Element[];
}

const Card: FC<CardProps> = ({
	children,
	className,
	size,
	pixelEffect,
	fullWidth,
	variant,
	...props
}) => {
	return (
		<article
			className={mergeClass(
				cardVariants({
					variant,
					size,
					pixelEffect,
					fullWidth,
					className,
				})
			)}
			{...props}
		>
			{children}
		</article>
	);
};

// Card
('relative z-10 flex h-[180px] w-[300px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-custom-blue-900 bg-custom-blue-900 transition-all duration-300 hover:bg-transparent xs:w-[380px] md:h-[200px]');

// ('z-10 flex flex-col border border-custom-blue-900 bg-custom-blue-900 transition-all duration-300 hover:bg-transparent');

export default Card;

// // Card
// ('relative h-[180px] w-[300px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl xs:w-[380px] md:h-[200px]');

// // Small Card
// ('  h-[140px] w-[142px] max-w-full cursor-default flex-col items-center justify-center rounded-xl xs:h-[170px] xs:w-[190px] sm:h-[200px] sm:w-[220px]');

// // BigCard
// ('CardLeftPixelEffect mx-2  max-w-[500px] cursor-default flex-col items-center justify-center rounded-xl pb-4 xs:mx-3');

// // Project Card
// ('group relative  w-[300px] flex-col justify-between overflow-hidden rounded-2xl p-4 xs:w-[380px]');
