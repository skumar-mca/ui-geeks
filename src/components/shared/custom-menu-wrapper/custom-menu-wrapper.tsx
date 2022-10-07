import classNames from 'classnames';
import React from 'react';
import { AppPrefix } from '../../../util/app-constants';
import NavigationMenu from '../../shared/navigation-menu/navigation-menu';
import './custom-menu-wrapper.scss';
import { ICustomMenuWrapperProps } from './custom-menu-wrapper.types';

const CustomMenuWrapper = (props: ICustomMenuWrapperProps) => {
  const { menuTitle, menuItems } = props;
  const menuClasses = classNames({
    [`${AppPrefix}-custom-menu-wrapper`]: true
  });

  return (
    <div className={menuClasses}>
      <div className='menu-title'>{menuTitle}</div>
      <div className='menu-section'>
        <NavigationMenu menuList={menuItems} />
      </div>
    </div>
  );
};

export default CustomMenuWrapper;
