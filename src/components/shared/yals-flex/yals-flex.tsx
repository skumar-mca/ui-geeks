import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import './yals-flex.scss';
import { IYALSFlexProps } from './yals-flex.types';

const YALSFlex = (props: IYALSFlexProps) => {
  const {
    children,
    flexDirection,
    justifyContent,
    alignItems,
    width = '100%'
  } = props;

  const flexClasses = classNames({
    [`${AppPrefix}-flex`]: true,
    [`flex-direction`]: flexDirection,
    [`justify-content`]: justifyContent,
    [`align-items`]: alignItems
  });

  const flexStyle: CSSProperties = {
    flexDirection: flexDirection as 'row',
    justifyContent: justifyContent,
    alignItems: alignItems,
    width: width
  };

  return (
    <div className={flexClasses} style={flexStyle}>
      {children}
    </div>
  );
};

export default YALSFlex;
