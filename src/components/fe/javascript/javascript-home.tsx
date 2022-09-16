import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Outlet } from 'react-router-dom';
import NavigationMenu from '../../shared/navigation-menu/navigation-menu';
import { IMenuItem } from '../../shared/navigation-menu/navigation-menu.types';
import NextPrevButtons from '../../shared/next-prev-btn/next-prev-btn';
import ScrollTopButton from '../../shared/scroll-top-btn/scroll-top-btn';
import './javascript-home.scss';
import { JSLINK } from './js-link-tree';

const routePrefix = '/fe/javascript/';
const menuItems: Array<IMenuItem> = [
  {
    url: `${routePrefix}introduction`,
    label: 'Introduction'
  },
  {
    url: `${routePrefix}history`,

    label: 'History'
  },
  {
    url: `${routePrefix}include-code`,
    label: 'Including Scripts'
  },
  {
    url: `${routePrefix}console`,
    label: 'Console'
  },
  {
    url: `${routePrefix}data-types`,
    label: 'Data types'
  },
  {
    url: `${routePrefix}grammer`,

    label: 'Grammer and Types'
  },
  {
    url: `${routePrefix}operators`,
    label: 'Operators'
  },
  {
    url: `${routePrefix}control-structures`,
    label: 'Control Structures'
  },
  {
    url: `${routePrefix}objects`,
    label: 'Objects'
  },
  {
    url: `${routePrefix}arrays`,
    label: 'Arrays'
  },
  {
    url: `${routePrefix}functions`,
    label: 'Functions'
  },
  {
    url: `${routePrefix}closures`,
    label: 'Closures'
  },
  {
    url: `${routePrefix}arrow-functions`,
    label: 'Arrow Functions'
  },
  {
    url: `${routePrefix}modules`,
    label: 'Modules'
  },
  {
    url: `${routePrefix}this-keyword`,
    label: 'this Keyword'
  },
  {
    url: `${routePrefix}class-keyword`,
    label: 'Class'
  },
  {
    url: `${routePrefix}prototype-chain`,
    label: 'Prototype Chain'
  },
  {
    url: `${routePrefix}strict-mode`,
    label: 'Strict Mode'
  },
  {
    url: `${routePrefix}hoisting`,
    label: 'Hoisting'
  },
  {
    url: `${routePrefix}exception-handling`,
    label: 'Exception Handling'
  },
  {
    url: `${routePrefix}iterators-and-generators`,
    label: 'Iterators and Generators'
  }
];

const JSHome = () => {
  return (
    <Row>
      <Col lg={2} md={3} sm={4} className='yals-left-section'>
        <NavigationMenu menuList={menuItems} />
      </Col>

      <Col lg={10} md={9} sm={8} className='yals-content-section'>
        <Outlet />
        <NextPrevButtons allItems={JSLINK} />
        <ScrollTopButton />
      </Col>
    </Row>
  );
};

export default JSHome;
