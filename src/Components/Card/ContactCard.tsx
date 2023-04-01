import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactCardProps } from './types';

const ContactCard = ({ contact }: ContactCardProps) => {
  const { contactInformation, contactLink, contactType, icon, id } = contact;

  return (
    <a href={contactLink} target="_blank" rel="noreferrer">
      <article className="relative z-10 flex h-[180px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-xl border border-custom-blue-900 bg-custom-blue-900 transition-all duration-300 hover:bg-transparent xs:w-[380px] md:h-[200px]">
        <FontAwesomeIcon
          icon={icon}
          className={`my-3 h-4 w-4 text-white transition-all duration-500`}
        />
        <h1 className="mt-1 text-white">{contactType}</h1>
        <p className="my-1 text-custom-gray-100">{contactInformation}</p>
        <p className="my-1 text-custom-blue-500">Send a message</p>
      </article>
    </a>
  );
};

export default ContactCard;
