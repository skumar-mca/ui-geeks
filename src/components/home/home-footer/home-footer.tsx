import classNames from 'classnames';
import React from 'react';
import { AppPrefix } from '../../../util/app-constants';
import './home-footer.scss';

const HomeFooter = () => {
  const homeFooter = classNames({ [`${AppPrefix}-home-footer`]: true });
  return (
    <div className={homeFooter}>
      &#169; {new Date().getFullYear()} YALS - Yet another learning source.
    </div>
  );
};

export default HomeFooter;
