import classNames from 'classnames';
import React, { memo } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { AppPrefix } from '../../../util/app-constants';
import './yals-breadcrumb.scss';
import { IYALSBreadcrumbProps } from './yals-breadcrumb.types';

const YALSBreadcrumb = (props: IYALSBreadcrumbProps) => {
  const { items } = props;

  const breadcrumbClasses = classNames({
    [`${AppPrefix}-breadcrumb`]: true
  });

  return (
    <Breadcrumb className={breadcrumbClasses}>
      {items.slice(0, items.length - 1).map((itm: any) => {
        return (
          <Breadcrumb.Item key={itm.label} href={`#${itm.link}`}>
            {itm.label}
          </Breadcrumb.Item>
        );
      })}
      <Breadcrumb.Item active>{items[items.length - 1].label}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default memo(YALSBreadcrumb);
