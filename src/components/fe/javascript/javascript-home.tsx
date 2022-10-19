import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import useQTextScroll from '../../../custom-hooks/use-qtext-scroll';
import HomePageWrapper from '../../shared/home-page-wrapper/home-page-wrapper';
import NavigationMenu from '../../shared/navigation-menu/navigation-menu';
import { JS_BLOG_MENU_ITEMS } from './blogs/js-blogs-menu-items';
import './javascript-home.scss';
import { JSBreadcrumbLink } from './js-breadcrumb-links';
import { JSLINK } from './js-link-tree';
import { JS_ROUTE_PATH } from './js-menu-items';

const JSHome = () => {
  useQTextScroll();
  return (
    <HomePageWrapper
      menuLinks={JSLINK}
      menuItems={JS_ROUTE_PATH}
      breadcrumbLink={JSBreadcrumbLink}
      language='JavaScript'
      customMenuContent={
        <NavigationMenu
          menuList={JS_BLOG_MENU_ITEMS}
          menuTitle={'JavaScript Blogs'}
        />
      }
    >
      <Outlet />
    </HomePageWrapper>
  );
};

export default memo(JSHome);
