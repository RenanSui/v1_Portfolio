import { ContactContext } from '@/src/Contexts/Contact/ContactContext';
import { IContactPropsInfo } from '@/src/Contexts/Contact/types';
import { useContext } from 'react';

type ContactInputProps = { inputLabel: IContactPropsInfo };

const ContactTextarea = ({ inputLabel }: ContactInputProps) => {
	const { contactState, dispatch } = useContext(ContactContext);
	const { actionType, type } = inputLabel;

	const dynamicValueType = contactState[type];

	return (
		<textarea
			id={type}
			name={type}
			className={`peer h-[200px] flex-grow resize-none rounded-md border border-custom-blue-900 bg-transparent px-4 py-4 font-light text-white outline-none transition-all duration-700 xs:w-[380px]`}
			autoComplete="off"
			onChange={(e) =>
				dispatch({ type: actionType, payload: e.target.value })
			}
			value={dynamicValueType}
		></textarea>
	);
};

// w-[300px]

export default ContactTextarea;
