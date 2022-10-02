import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import ReactControlledComponents from '../components/controlled-components';
import ReactUnControlledComponents from '../components/uncontrolled-component/uncontrolled-components';
import ReactFormHandlingEvents from './handling-events';

const ReactForms = () => {
  useDOMTitle('YALS: React | Forms');

  return (
    <Container>
      <Heading>Forms</Heading>
      <Para>
        HTML form elements work a bit differently from other DOM elements in
        React, because form elements naturally keep some internal state.
      </Para>

      <Para>
        <ReactControlledComponents />
        <ReactUnControlledComponents />
        <ReactFormHandlingEvents />
      </Para>
    </Container>
  );
};

export default ReactForms;
