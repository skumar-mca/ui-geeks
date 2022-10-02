import React from 'react';
import Para from '../../../../shared/para/para';
import ReactDefaultProps from './default-props';
import ReactPropsIntro from './props-intro';
import ReactPropsReadOnly from './props-read-only';

const ReactProps = () => {
  return (
    <>
      <ReactPropsIntro />

      <Para>
        <ReactDefaultProps />
        <ReactPropsReadOnly />
      </Para>
    </>
  );
};

export default ReactProps;
