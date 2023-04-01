import { ContactContext } from '@/src/Contexts/Contact/ContactContext';
import { IContactPropsInfo } from '@/src/Contexts/Contact/types';
import { useContext } from 'react';

type ContactLabelProps = { inputLabel: IContactPropsInfo };

const ContactLabel = ({ inputLabel }: ContactLabelProps) => {
  const { contactState } = useContext(ContactContext);
  const { labelPlaceholder, type } = inputLabel;

  const dynamicValueType = contactState[type];

  return (
    <label
      htmlFor={type}
      className={`pointer-events-none absolute cursor-text text-gray-600 transition-all duration-700 ${
        dynamicValueType
          ? '-top-3 left-1 scale-90 text-gray-500'
          : 'left-4 top-4 z-10 peer-focus:-top-3 peer-focus:left-1 peer-focus:scale-90 peer-focus:text-gray-500'
      }`}
    >
      {labelPlaceholder}
    </label>
  );
};

export default ContactLabel;
