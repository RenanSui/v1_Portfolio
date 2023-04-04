import { ContactContext } from '@/src/Contexts/Contact/ContactContext';
import { FC, useContext } from 'react';

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
	children?: string | JSX.Element | JSX.Element[];
	type: 'email' | 'name' | 'message';
	actionType: 'changeName' | 'changeEmail' | 'changeMessage';
}

const TextArea: FC<TextAreaProps> = ({ type, actionType, ...props }) => {
	const { contactState, dispatch } = useContext(ContactContext);
	const dynamicValueType = contactState[type];

	return (
		<textarea
			className="peer h-[200px] flex-grow resize-none rounded-md border border-custom-blue-900 bg-transparent px-4 py-4 font-light text-white outline-none transition-all duration-700 xs:w-[380px]"
			onChange={(e) =>
				dispatch({ type: actionType, payload: e.target.value })
			}
			{...props}
			value={dynamicValueType}
		/>
	);
};

export default TextArea;
