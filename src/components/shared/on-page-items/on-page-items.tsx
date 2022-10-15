import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import useDeviceType from '../../../custom-hooks/use-device-type';
import useCurrentPath from '../../../custom-hooks/useCurrentRoute';
import { AppPrefix, DeviceType } from '../../../util/app-constants';
import { buildChildren, getOnPageItems, populateId } from '../../../util/util';
import Heading from '../heading/heading';
import YALSButton from '../yals-button/yals-button';
import { YALSButtonVariantTypes } from '../yals-button/yals-button.types';
import './on-page-items.scss';

const OnPageItems = (props: any) => {
  const { allItems, onMenuClick } = props;
  const currentPath = useCurrentPath();

  const deviceType = useDeviceType();

  const onPageClasses = classNames({
    [`${AppPrefix}-on-page-items`]: true
  });

  const [currentItem, setCurrentItem] = useState({ children: [] });

  const getOnPageItem = () => {
    const items = getOnPageItems(currentPath, allItems);
    setCurrentItem(() => items);
  };

  useEffect(() => {
    getOnPageItem();
  }, [currentPath]);

  const scrollToItem = (evt: any, itm: any) => {
    evt.preventDefault();
    const label = itm.altLabel || itm.label;
    const elm = document.getElementById(populateId(label));
    if (elm) {
      var scrollDiv = elm.offsetTop - 50;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
    }

    onMenuClick && onMenuClick(itm);
  };

  const getItems = () => {
    const { children: menuChildrens } = currentItem;
    if (menuChildrens) {
      const childList = buildChildren(menuChildrens, 0, []);

      return (
        <ul>
          {childList.map((itm) => {
            return (
              <li key={itm.label}>
                <YALSButton
                  onClick={(evt: any) => scrollToItem(evt, itm)}
                  variant={YALSButtonVariantTypes.Clear}
                  className={`iteration-${itm.iteration}`}
                >
                  {itm.shortLabel || itm.label}
                </YALSButton>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  const renderChildren = (
    childList: Array<any>,
    iteration: number,
    childLIList: Array<any>
  ) => {
    childList.map((itm: any) => {
      childLIList.push({
        iteration,
        label: itm.label,
        altLabel: itm.altLabel,
        shortLabel: itm.shortLabel
      });
      if (itm.children) {
        renderChildren(itm.children, iteration + 1, childLIList);
      }
    });

    return childLIList;
  };

  return (
    <div className={onPageClasses}>
      {deviceType === DeviceType.LargeDesktop &&
        currentItem.children &&
        currentItem.children.length > 0 && (
          <Heading as='h5'>On this page</Heading>
        )}
      {getItems()}
    </div>
  );
};

export default memo(OnPageItems);
