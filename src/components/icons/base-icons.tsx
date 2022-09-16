import React from 'react';
import { IBaseIconsProps } from './base-icons.types';

const BaseIcon = (props: IBaseIconsProps) => {
  const {
    width = 16,
    height = 16,
    fillColor = 'rgb(70, 70, 94)',
    viewBox = '0 0 16 16',
    d
  } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fillColor}
      viewBox={viewBox}
    >
      <path d={d} />
    </svg>
  );
};

export default BaseIcon;
