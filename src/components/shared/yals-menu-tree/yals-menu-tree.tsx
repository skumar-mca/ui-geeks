import classNames from 'classnames';
import React from 'react';
import { IMenuTreeItemType } from '../../../types/common';
import { AppPrefix } from '../../../util/app-constants';
import Heading from '../heading/heading';
import MenuTreeComponent from './menu-tree-component';
import './yals-menu-tree.scss';
import { IYalsMenuTreeProps } from './yals-menu-tree.types';

const YALSMenuTree = (props: IYalsMenuTreeProps) => {
  const { menuTree, linksMenu } = props;

  const menuTreeClasses = classNames({
    [`${AppPrefix}-menu-tree`]: true
  });

  return (
    <div className={menuTreeClasses}>
      {menuTree.map((menu: IMenuTreeItemType) => {
        return (
          <>
            <Heading as='h2'>{menu.label}</Heading>
            <MenuTreeComponent
              menuChildren={menu.children}
              linksMenu={linksMenu}
            />
          </>
        );
      })}
    </div>
  );
};

export default YALSMenuTree;
