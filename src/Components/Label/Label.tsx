import { ContactContext } from '@/src/Contexts/Contact/ContactContext';
import { FC, useContext } from 'react';

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
	children?: string | JSX.Element | JSX.Element[];
	htmlFor: 'email' | 'name' | 'message';
}

const Label: FC<LabelProps> = ({ children, htmlFor, ...props }) => {
	const { contactState } = useContext(ContactContext);
	const dynamicValueType = contactState[htmlFor];

	return (
		<label
			className={`pointer-events-none absolute cursor-text text-gray-600 transition-all duration-700  ${
				dynamicValueType
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
