import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

interface IconComponentProps {
	icon: IconProp;
	className?: string;
}

const Icon: FC<IconComponentProps> = ({ icon, className, ...props }) => {
	return (
		<FontAwesomeIcon
			icon={icon}
			className={`h-4 w-4 transition-all duration-500 ${className}`}
			{...props}
		/>
	);
};

export default Icon;
