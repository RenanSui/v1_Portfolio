import { FC } from 'react';

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
	children?: string | JSX.Element | JSX.Element[];
	htmlFor: 'email' | 'name' | 'message';
	watchValue: string | undefined;
}

const Label: FC<LabelProps> = ({ children, watchValue, ...props }) => {
	return (
		<label
			className={`pointer-events-none absolute cursor-text text-gray-600 transition-all duration-700  ${
				watchValue
					? '-top-3 left-1 scale-90 text-gray-500'
					: 'left-4 top-4 z-10 peer-focus:-top-3 peer-focus:left-1 peer-focus:scale-90 peer-focus:text-gray-500'
			}`}
			{...props}
		>
			{children}
		</label>
	);
};

export default Label;
