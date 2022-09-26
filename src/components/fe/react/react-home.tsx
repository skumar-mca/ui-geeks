import React, { memo } from 'react';
import HomePageWrapper from '../../shared/home-page-wrapper/home-page-wrapper';
import { ReactBreadcrumbLink } from './react-breadcrumb-links';
import './react-home.scss';
import { REACT_LINK } from './react-link-tree';
import { ReactMenuItems } from './react-menu-items';

const ReactHome = () => {
  return (
    <HomePageWrapper
      menuLinks={REACT_LINK}
      menuItems={ReactMenuItems}
      breadcrumbLink={ReactBreadcrumbLink}
    />
  );
};

export default memo(ReactHome);
