import classNames from 'classnames';
import React, { memo, useContext, useState } from 'react';
import { AppPrefix, THEME_CONSTANT } from '../../util/app-constants';
import { AppContext } from '../../util/app-context';
import OpenNewIcon from '../profile/components/icons/open-new-icon';
import YalsFlex from '../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../shared/yals-flex/yals-flex.types';
import ExtensionList from './vs-extensions.json';
import './vscode-extension.scss';
import { IVSCodeExtensionType } from './vscode-extension.types';

const VSCodeExtesnsionComponent = () => {
  const appContext = useContext(AppContext);

  const extCls = classNames({
    [`${AppPrefix}-vscode-extention`]: true,
    'mt-4': true
  });

  const [extensionList] = useState(ExtensionList);

  return (
    <div className={extCls}>
      <div className='custom-list grid-box'>
        <div className='custom-list-wrapper'>
          <div className='header-title'>Visual Studio Code Extensions</div>
          <div className='heading-separator'></div>
          <div className='grid-list publihsed-books'>
            {extensionList.map((ext: IVSCodeExtensionType) => {
              return (
                <a href={ext.url} className='no-link-btn'>
                  <div
                    className='grid-list-item publihsed-books'
                    key={ext.extensionName}
                  >
                    <YalsFlex
                      justifyContent={FlexJustifyContentTypes.FlexStart}
                      alignItems={FlexAlignItemsTypes.Center}
                      gap='20px'
                    >
                      <div className='img-box toggle-img'>
                        <img
                          width='50px'
                          height='50px'
                          src={ext.icon}
                          alt={ext.displayName}
                        />
                      </div>

                      <div>
                        <div className='item-name mb-0'>
                          {ext.displayName}{' '}
                          <span className='text-sm me-2'>(v{ext.version})</span>
                          <OpenNewIcon
                            fillColor={
                              appContext.theme === THEME_CONSTANT.DARK_THEME
                                ? 'white'
                                : 'black'
                            }
                          />
                        </div>
                        <div className='item-desc flex-grow-1'>
                          {ext.shortDescription}
                        </div>
                      </div>
                    </YalsFlex>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(VSCodeExtesnsionComponent);
