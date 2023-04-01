import {
  faBolt,
  faBriefcase,
  faEnvelope,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import NavListItems from './NavListItems';
import { INavList } from './types';

const navList: INavList[] = [
  {
    id: 1,
    titleName: 'Home',
    icon: faHouse,
    active: true,
    hrefLink: '#',
  },
  {
    id: 2,
    titleName: 'About Me',
    icon: faUser,
    active: false,
    hrefLink: '#about',
  },
  {
    id: 3,
    titleName: 'Experience',
    icon: faBolt,
    active: false,
    hrefLink: '#experience',
  },
  {
    id: 4,
    titleName: 'Portfolio',
    icon: faBriefcase,
    active: false,
    hrefLink: '#portfolio',
  },
  {
    id: 5,
    titleName: 'Contact Me',
    icon: faEnvelope,
    active: false,
    hrefLink: '#contact',
  },
];

const FloatingNavbar = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full bg-transparent-30 backdrop-blur-lg transition-all duration-500">
      <ul className="flex px-5 py-1 transition-all duration-500 xs:px-7 xs:py-3">
        {navList.map((navItem) => (
          <NavListItems navItem={navItem} key={navItem.id} />
        ))}
      </ul>
    </nav>
  );
};

export default FloatingNavbar;
