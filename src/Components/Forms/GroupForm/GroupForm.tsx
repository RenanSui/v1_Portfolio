import { FC } from 'react';

interface GroupFormProps extends React.HTMLAttributes<HTMLFormElement> {
	children?: string | JSX.Element | JSX.Element[];
}

const GroupForm: FC<GroupFormProps> = ({ children, ...props }) => {
	return (
		<form
			{...props}
			className="relative flex flex-col items-center gap-4 rounded-md text-custom-gray-100 transition-all duration-700"
		>
			{children}
		</form>
	);
};

export default GroupForm;
