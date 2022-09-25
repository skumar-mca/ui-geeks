import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import { useNavigate } from 'react-router-dom';
import useDeviceType from '../../../../custom-hooks/use-device-type';
import {
  AppPrefix,
  DeviceType,
  ImagePaths
} from '../../../../util/app-constants';
import { buildChildren } from '../../../../util/util';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, NewLine } from '../../../shared/util/util';
import YALSBadge from '../../../shared/yals-badge/yals-badge';
import YalsButton from '../../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../../shared/yals-button/yals-button.types';
import YalsFlex from '../../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../../shared/yals-flex/yals-flex.types';
import YalsImage from '../../../shared/yals-image/yals-image';
import { JSLINK } from '../js-link-tree';
import './javascript-landing.scss';

const JSLandingPage = () => {
  const deviceType = useDeviceType();
  const imagePath = 'images/js-icon.png';
  const homeLandingClass = classNames({ [`${AppPrefix}-js-landing`]: true });

  const [menuList, setMenuList] = useState<Array<any>>([]);
  const buildMenuList = () => {
    const menuArr: Array<any> = [];
    JSLINK.map((itm: any) => {
      menuArr.push({
        label: itm.label,
        link: itm.link,
        childList: itm.children ? buildChildren(itm.children, 0, []) : []
      });
    });

    setMenuList(() => menuArr);
  };

  const navigate = useNavigate();
  const redirectToTopic = (itm: any) => {
    navigate(itm.link);
  };

  const redirectToIntroduction = (itm: any) => {
    navigate(JSLINK[0].link);
  };

  useEffect(() => {
    buildMenuList();
  }, []);

  return (
    <div className={homeLandingClass}>
      <YalsFlex
        justifyContent={FlexJustifyContentTypes.Center}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <img src={imagePath} alt={imagePath} className='language-icon' />
      </YalsFlex>
      <YalsFlex
        justifyContent={FlexJustifyContentTypes.Center}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <h1>JavaScript</h1>
      </YalsFlex>
      <NewLine />
      <NewLine />
      <Para>
        JavaScript (JS) is a light-weight,
        <B>interpreted</B> <Space /> or <B>just-in-time compiled</B> programming
        language with <Space /> <B>first-class functions</B>. It is
        <B>prototype-based</B>,<B> multi-paradigm</B>,<B>single threaded</B>,
        <B> dynamic language</B>, supporting <Space /> <B>object-oriented</B>,
        <B> imperative</B> and <Space /> <B>declarative</B> styles.
      </Para>

      <Para>
        <YalsButton
          variant={YALSButtonVariantTypes.Primary}
          onClick={redirectToIntroduction}
          block={deviceType === DeviceType.Mobile}
        >
          Explore Now
        </YalsButton>
      </Para>

      <div className='content-section'>
        <YalsFlex justifyContent={FlexJustifyContentTypes.Center}>
          <YalsImage
            width='100%'
            imagePath={ImagePaths.JS_WORD_CLOUD}
            alt='JavaScript Word Cloud'
          />
        </YalsFlex>
      </div>

      <Para>
        <Table
          striped={true}
          bordered={true}
          hover={true}
          size={'sm'}
          className='content-table'
        >
          <thead>
            <tr>
              <th>Course Content</th>
            </tr>
          </thead>
          <tbody>
            {menuList.map((itm: any) => {
              return (
                <tr key={itm.link}>
                  <td>
                    <YalsButton
                      variant={YALSButtonVariantTypes.Link}
                      onClick={redirectToTopic.bind(this, itm)}
                    >
                      {itm.label}
                    </YalsButton>
                    <div className='item-child'>
                      {itm.childList.map((child: any) => {
                        return (
                          <YALSBadge
                            key={child.label}
                            bg={YALSButtonVariantTypes.Success}
                            content={child.label}
                          />
                        );
                      })}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Para>
    </div>
  );
};

export default JSLandingPage;
