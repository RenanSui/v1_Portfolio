import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface INavList {
  id: number;
  titleName: string;
  icon: IconDefinition;
  active: Boolean;
  hrefLink: String;
}

export type NavListProps = { navItem: INavList };
