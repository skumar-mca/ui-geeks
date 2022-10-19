import React, { useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { ILabelURLType, ILinkTreeType } from '../../../types/common';
import { AppPrefix } from '../../../util/app-constants';
import { populateId } from '../../../util/util';
import Heading from '../heading/heading';
import YALSNavigateButton from '../yals-navigate-btn/yals-navigate-btn';

export const RenderItem = (props: any) => {
  const { menus, primaryURL } = props;

  return (
    <>
      {menus.map((mn: any) => {
        return (
          <div>
            <YALSNavigateButton
              to={
                !primaryURL
                  ? mn.url
                  : `${primaryURL}?qtext=${populateId(mn.label)}`
              }
              label={mn.shortLabel || mn.label}
              className={`${AppPrefix}-btn`}
            />
          </div>
        );
      })}
    </>
  );
};
export const SubTree = (props: any) => {
  const { currentMenu, linksMenu } = props;

  const subMenu = linksMenu.find((mn: ILinkTreeType) => {
    return mn.link === currentMenu.url;
  });

  const menuItems = subMenu && subMenu.children ? subMenu.children : [];
  const itemsPerColumn = menuItems.length / 3;

  if (menuItems.length === 0) {
    return (
      <Row>
        <Col xl={4} lg={4} md={4} sm={12}>
          <RenderItem
            menus={[{ label: 'Introduction' }]}
            primaryURL={currentMenu.url}
          />
        </Col>
      </Row>
    );
  }

  return (
    <>
      <Row>
        {menuItems.length <= 3 ? (
          <Col xl={4} lg={4} md={4} sm={12}>
            <RenderItem menus={menuItems} primaryURL={currentMenu.url} />
          </Col>
        ) : (
          <>
            <Col xl={4} lg={4} md={4} sm={12}>
              <RenderItem
                menus={menuItems.slice(0, itemsPerColumn)}
                primaryURL={currentMenu.url}
              />
            </Col>

            <Col xl={4} lg={4} md={4} sm={12}>
              <RenderItem
                menus={menuItems.slice(0 + itemsPerColumn, 2 * itemsPerColumn)}
                primaryURL={currentMenu.url}
              />
            </Col>

            <Col xl={4} lg={4} md={4} sm={12}>
              <RenderItem
                menus={menuItems.slice(2 * itemsPerColumn + 1)}
                primaryURL={currentMenu.url}
              />
            </Col>
          </>
        )}
      </Row>
    </>
  );
};
const MenuTreeComponent = (props: any) => {
  const { menuChildren, linksMenu } = props;

  if (!menuChildren) {
    return <></>;
  }

  useEffect(() => {}, menuChildren);

  return (
    <div>
      {menuChildren.map((menu: ILabelURLType) => {
        return (
          <>
            <YALSNavigateButton
              to={menu.url}
              label={<Heading as='h4'>{menu.label}</Heading>}
              className={`${AppPrefix}-btn`}
            />
            <SubTree currentMenu={menu} linksMenu={linksMenu} />
          </>
        );
      })}
    </div>
  );
};

export default MenuTreeComponent;
