import { FC } from 'react';

interface MenuListProps extends React.HTMLAttributes<HTMLLIElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const MenuList: FC<MenuListProps> = ({ children, ...props }) => {
	return <li {...props}>{children}</li>;
};

export default MenuList;
