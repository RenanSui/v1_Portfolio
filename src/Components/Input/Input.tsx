import { forwardRef } from 'react';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	children?: string | JSX.Element | JSX.Element[];
	type: React.HTMLInputTypeAttribute | undefined;
	disabled: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type, disabled, ...props }, ref) => {
		return (
			<input
				type="text"
				id={type}
				name={type}
				ref={ref}
				autoComplete="off"
				className={`peer flex-grow rounded-md border border-custom-blue-900 bg-transparent px-4 py-4 font-light text-white outline-none transition-all duration-700 xs:w-[380px] ${
					disabled ? 'text-red-500' : ''
				}`}
				{...props}
			/>
		);
	}
);

Input.displayName = 'Input';

export default Input;
