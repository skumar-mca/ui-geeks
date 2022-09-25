import React, { memo, Suspense, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Outlet } from 'react-router-dom';
import useDeviceType from '../../../custom-hooks/use-device-type';
import useCurrentPath from '../../../custom-hooks/useCurrentRoute';
import { DeviceType } from '../../../util/app-constants';
import ListIcon from '../../icons/list-icon';
import Container from '../../shared/container/container';
import ContentLoader from '../../shared/content-loader/content-loader';
import NavigationMenu from '../../shared/navigation-menu/navigation-menu';
import { IMenuItem } from '../../shared/navigation-menu/navigation-menu.types';
import NextPrevButtons from '../../shared/next-prev-btn/next-prev-btn';
import ScrollTopButton from '../../shared/scroll-top-btn/scroll-top-btn';
import YALSBreadcrumb from '../../shared/yals-breadcrumb/yals-breadcrumb';
import YALSButton from '../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../shared/yals-button/yals-button.types';
import YALSFlex from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import YALSModal from '../../shared/yals-modal/yals-modal';
import './javascript-home.scss';
import { JSBreadcrumbLink } from './js-breadcrumb-links';
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
  const deviceType = useDeviceType();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev: boolean) => !prev);
  };

  const hideMenu = () => {
    setShowMenu(() => false);
  };

  const currentPath = useCurrentPath();

  const getCurrentRouteMenu = () => {
    const crntItem = JSLINK.find((itm: any) => itm.link === currentPath);
    return crntItem || {};
  };

  return (
    <Row>
      {deviceType != DeviceType.Mobile && (
        <Col lg={2} md={3} sm={4} className='yals-left-section'>
          <NavigationMenu menuList={menuItems} />
        </Col>
      )}

      <Col
        lg={deviceType === DeviceType.Mobile ? 12 : 10}
        md={deviceType === DeviceType.Mobile ? 12 : 9}
        sm={deviceType === DeviceType.Mobile ? 12 : 8}
      >
        <YALSBreadcrumb
          items={JSBreadcrumbLink}
          currentMenuItem={getCurrentRouteMenu()}
        />

        {deviceType === DeviceType.Mobile && (
          <>
            {!showMenu && (
              <YALSFlex
                className='mobile-menu-wrapper'
                justifyContent={FlexJustifyContentTypes.Center}
                alignItems={FlexAlignItemsTypes.Center}
              >
                <YALSButton
                  onClick={toggleMenu}
                  variant={YALSButtonVariantTypes.Clear}
                >
                  <ListIcon height={25} width={25} />
                </YALSButton>
              </YALSFlex>
            )}

            {showMenu && (
              <YALSModal
                modalHeader='Navigation'
                show={showMenu}
                onHide={toggleMenu}
                fullScreen={true}
                modalContent={
                  <NavigationMenu menuList={menuItems} onMenuClick={hideMenu} />
                }
              />
            )}
          </>
        )}

        <Suspense fallback={<ContentLoader />}>
          <Outlet />
        </Suspense>
        <Container>
          <NextPrevButtons allItems={JSLINK} />
        </Container>
        <ScrollTopButton />
      </Col>
    </Row>
  );
};

export default memo(JSHome);
