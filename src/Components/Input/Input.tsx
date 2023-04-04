import { ContactContext } from '@/src/Contexts/Contact/ContactContext';
import { FC, useContext } from 'react';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	children?: string | JSX.Element | JSX.Element[];
	type: 'email' | 'name' | 'message';
	actionType: 'changeName' | 'changeEmail' | 'changeMessage';
}

const Input: FC<InputProps> = ({ type, actionType, ...props }) => {
	const { contactState, dispatch } = useContext(ContactContext);
	const dynamicValueType = contactState[type];

	return (
		<input
			type="text"
			id={type}
			name={type}
			className={`peer flex-grow rounded-md border border-custom-blue-900 bg-transparent px-4 py-4 font-light text-white outline-none transition-all duration-700 xs:w-[380px]`}
			autoComplete="off"
			value={dynamicValueType}
			onChange={(e) =>
				dispatch({ type: actionType, payload: e.target.value })
			}
			{...props}
		/>
	);
};

export default Input;
