import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import ReactClassComponentLifeCycle from './class-comp-lifecycle/class-comp-lifecycle';
import ReactClassErrorHandlingMethods from './class-comp-lifecycle/error-handling-methods';
import ReactClassComponentIntro from './class-component-intro';
import ReactClassComponentProperties from './class-properties';
import ReactClassPropsIntro from './class-props';

const ReactClassComponents = () => {
  useDOMTitle('YALS: React | Class Component');

  return (
    <Container>
      <Heading>Class Component</Heading>
      <ReactClassComponentIntro />
      <ReactClassPropsIntro />

      <ReactClassComponentProperties />
      <ReactClassComponentLifeCycle />
      <ReactClassErrorHandlingMethods />
    </Container>
  );
};

export default ReactClassComponents;
