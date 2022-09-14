export interface IMenuItem {
  url: string;
  label: string;
}

export interface INavigationMenuProps {
  menuList: Array<IMenuItem>;
  menuTitle?: string;
}
