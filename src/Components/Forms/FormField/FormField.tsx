import { FC } from 'react';

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[];
}

const FormField: FC<FormFieldProps> = ({ children, ...props }) => {
	return (
		<div
			{...props}
			className="relative flex w-full max-w-[300px] justify-center transition-all duration-700 xs:max-w-[380px]"
		>
			{children}
		</div>
	);
};

export default FormField;
