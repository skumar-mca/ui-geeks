import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavigationMenu from '../../shared/navigation-menu/navigation-menu';
import { IMenuItem } from '../../shared/navigation-menu/navigation-menu.types';
import './javascript-home.scss';

const menuItems: Array<IMenuItem> = [
  {
    url: 'introduction',
    label: 'Introduction'
  },
  {
    url: 'history',
    label: 'History'
  },
  {
    url: 'include-code',
    label: 'Including Scripts'
  },
  {
    url: 'console',
    label: 'Console'
  },
  {
    url: 'data-types',
    label: 'Data types'
  },
  {
    url: 'grammer',
    label: 'Grammer and Types'
  },
  {
    url: 'operators',
    label: 'Operators'
  },
  {
    url: 'control-structures',
    label: 'Control Structures'
  },
  {
    url: 'objects',
    label: 'Objects'
  },
  {
    url: 'arrays',
    label: 'Arrays'
  },
  {
    url: 'functions',
    label: 'Functions'
  },
  {
    url: 'closures',
    label: 'Closures'
  },
  {
    url: 'arrow-functions',
    label: 'Arrow Functions'
  },
  {
    url: 'modules',
    label: 'Modules'
  },
  {
    url: 'script-loading-strategies',
    label: 'Script Loading'
  },
  {
    url: 'this-keyword',
    label: 'this Keyword'
  },
  {
    url: 'class-keyword',
    label: 'Class'
  },
  {
    url: 'prototype-chain',
    label: 'Prototype Chain'
  },
  {
    url: 'strict-mode',
    label: 'Strict Mode'
  },
  {
    url: 'hoisting',
    label: 'Hoisting'
  },
  {
    url: 'exception-handling',
    label: 'Exception Handling'
  },
  {
    url: 'iterators-and-generators',
    label: 'Tterators and Generators'
  }
];

const JSHome = () => {
  return (
    <>
      <Row>
        <Col lg={9} md={7} sm={12}>
          <Outlet />
        </Col>
        <Col lg={3} md={5} sm={12}>
          <NavigationMenu menuList={menuItems} />
        </Col>
      </Row>
    </>
  );
};

export default JSHome;
