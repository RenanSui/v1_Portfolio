import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavListProps } from './types';

const NavListItems = ({ navItem }: NavListProps) => {
  const { active, hrefLink, icon, id, titleName } = navItem;

  return (
    <li key={id} id={String(id)} title={titleName}>
      <a
        className={`block cursor-pointer rounded-full p-4 transition-all duration-500 xs:mx-2 ${
          active ? 'bg-custom-blue-900' : 'hover:bg-custom-darkBlue-900'
        }`}
        href={`${hrefLink}`}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`h-4 w-4 text-custom-gray-100 transition-all duration-500 ${
            active ? 'text-white' : ''
          }`}
        />
      </a>
    </li>
  );
};

export default NavListItems;
