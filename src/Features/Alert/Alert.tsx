import { FC } from 'react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const Alert: FC<AlertProps> = ({ children, className, ...props }) => {
	return (
		<div
			{...props}
			className={`fixed -top-52 left-1/2 z-50 -translate-x-1/2 animate-alert-error rounded-lg border border-solid border-custom-blue-900 bg-[#35365230] p-8 text-center text-2xl font-bold text-white opacity-100 backdrop-blur-md transition-all sm:w-[400px] ${className}`}
		>
			{children}
		</div>
	);
};

export default Alert;
