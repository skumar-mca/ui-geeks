import { ReactNode } from 'react';
import { IMenuItem } from '../navigation-menu/navigation-menu.types';

export interface ICustomMenuWrapperProps {
  menuTitle: string | ReactNode;
  menuItems: Array<IMenuItem>;
}
