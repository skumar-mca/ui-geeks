import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import './heading.scss';

const Heading = (props: any) => {
  const { as = 'h1', children, textAlign } = props;

  const headingClasses = classNames({ [`${AppPrefix}-heading`]: true });

  const style: CSSProperties = {
    textAlign: textAlign
  };

  return React.createElement(
    as,
    {
      className: headingClasses,
      style,
      tabIndex: 1
    },
    [...children]
  );
};

export default Heading;
