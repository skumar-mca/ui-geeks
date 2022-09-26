import React from 'react';
import Para from '../../../shared/para/para';
import { BI, I } from '../../../shared/util/util';
import YalsButton from '../../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../../shared/yals-button/yals-button.types';

const ReactDefinition = () => {
  return (
    <Para>
      React is a
      <YalsButton
        href='/#/fe/javascript-home'
        variant={YALSButtonVariantTypes.Link}
      >
        JavaScript
      </YalsButton>
      library for building <BI>user interfaces</BI>. React helps to build
      encapsulated components that manage their own <I>state</I>, then compose
      them to make complex UIs.
    </Para>
  );
};

export default ReactDefinition;
