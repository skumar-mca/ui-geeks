import React, { memo } from 'react';
import HomePageWrapper from '../../shared/home-page-wrapper/home-page-wrapper';
import './javascript-home.scss';
import { JSBreadcrumbLink } from './js-breadcrumb-links';
import { JSLINK } from './js-link-tree';
import { JSMenuItems } from './js-menu-items';

const JSHome = () => {
  return (
    <HomePageWrapper
      menuLinks={JSLINK}
      menuItems={JSMenuItems}
      breadcrumbLink={JSBreadcrumbLink}
    />
  );
};

export default memo(JSHome);
