import classNames from 'classnames';
import React, { memo } from 'react';
import { Button } from 'react-bootstrap';
import { AppPrefix } from '../../../util/app-constants';
import './yals-button.scss';
import { YALSButtonProps, YALSButtonSizeTypes } from './yals-button.types';

const YALSButton = (props: YALSButtonProps) => {
  const {
    children,
    className,
    variant,
    outline,
    size = YALSButtonSizeTypes.Small,
    href,
    title,
    block,
    active,
    disabled,
    onClick,
    onMouseMove
  } = props;

  const buttonClasses = classNames({
    [`${AppPrefix}-btn`]: true,
    [`${className}`]: className
  });

  const btnWrapperClasses = classNames({
    ['d-grid gap-2']: block
  });

  return (
    <span className={btnWrapperClasses}>
      <Button
        href={href}
        size={size as 'sm'}
        className={buttonClasses}
        variant={`${outline ? 'outline-' : ''}${variant}`}
        onClick={onClick}
        title={title}
        tabIndex={1}
        active={active}
        disabled={disabled}
        onMouseMove={onMouseMove && onMouseMove}
      >
        {children}
      </Button>
    </span>
  );
};

export default memo(YALSButton);
