import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B } from '../../../shared/util/util';
import ReactClassComponentLifeCycle from './class-comp-lifecycle/class-comp-lifecycle';
import ReactClassErrorHandlingMethods from './class-comp-lifecycle/error-handling-methods';
import ReactFunctionComponentLifeCycle from './function-comp-lifecycle/function-lifecycle';
import ReactLifeCyclePhases from './react-phases';

const ReactLifeCycle = () => {
  useDOMTitle('YALS: React | Component Lifecycle');

  return (
    <Container>
      <Heading>Component Lifecycle</Heading>
      <Para>
        Each component has several <B>"lifecycle methods"</B> that we can
        override to run code at particular times in the process.
      </Para>

      <Para>
        <ReactLifeCyclePhases />
        <ReactClassComponentLifeCycle />
        <ReactClassErrorHandlingMethods />
        <ReactFunctionComponentLifeCycle />
      </Para>
    </Container>
  );
};

export default ReactLifeCycle;
