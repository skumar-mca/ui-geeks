import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import CustomMenuWrapper from '../../shared/custom-menu-wrapper/custom-menu-wrapper';
import HomePageWrapper from '../../shared/home-page-wrapper/home-page-wrapper';
import { JS_BLOG_MENU_ITEMS } from './blogs/js-blogs-menu-items';
import './javascript-home.scss';
import { JSBreadcrumbLink } from './js-breadcrumb-links';
import { JSLINK } from './js-link-tree';
import { JS_ROUTE_PATH } from './js-menu-items';

const JSHome = () => {
  return (
    <HomePageWrapper
      menuLinks={JSLINK}
      menuItems={JS_ROUTE_PATH}
      breadcrumbLink={JSBreadcrumbLink}
      customMenuContent={
        <CustomMenuWrapper
          menuTitle='JavaScript Blogs'
          menuItems={JS_BLOG_MENU_ITEMS}
        />
      }
    >
      <Outlet />
    </HomePageWrapper>
  );
};

export default memo(JSHome);
