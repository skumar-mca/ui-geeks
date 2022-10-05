import React from 'react';
import Heading from '../heading/heading';
import { NewLine } from '../util/util';
import './demo-component-wrapper.scss';
import { IDemoWrapperProps } from './demo-component-wrapper.types';
const DemoComponentWrapper = (props: IDemoWrapperProps) => {
  const { children, title } = props;
  return (
    <div className='demo-component'>
      <div className='wrapper-title'>Demo</div>

      {title && (
        <>
          <Heading as='h5'>{title}</Heading>
          <NewLine />
        </>
      )}
      {children}
    </div>
  );
};

export default DemoComponentWrapper;
