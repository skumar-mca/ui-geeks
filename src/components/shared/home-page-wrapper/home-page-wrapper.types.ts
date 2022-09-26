import { IMenuItem } from '../navigation-menu/navigation-menu.types';

export interface IHomePageWrapperProps {
  menuLinks: Array<any>;
  menuItems: Array<IMenuItem>;
  breadcrumbLink: Array<any>;
}
