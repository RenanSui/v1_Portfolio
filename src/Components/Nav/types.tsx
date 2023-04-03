import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface INavList {
	id: number;
	titleName: string;
	icon: IconDefinition;
	active: boolean;
	hrefLink: string;
}

export type NavListProps = { navItem: INavList };
