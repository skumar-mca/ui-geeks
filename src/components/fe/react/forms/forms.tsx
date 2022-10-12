import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import ReactFormDefaultValue from '../components/uncontrolled-component/default-value';

import ReactControlledComponents from '../controlled-component/controlled-components';
import ReactUnControlledComponent from '../uncontrolled-component/uncontrolled-component';

import ReactFormHandlingEvents from './handling-events';

const ReactForms = () => {
  useDOMTitle('UI-Geeks: React | Forms');

  return (
    <Container>
      <Heading>Forms</Heading>
      <Para>
        HTML form elements work a bit differently from other DOM elements in
        React, because form elements naturally keep some internal state.
      </Para>

      <Para>
        <ReactControlledComponents />
        <ReactUnControlledComponent />

        <ReactFormDefaultValue />

        <ReactFormHandlingEvents />
      </Para>
    </Container>
  );
};

export default ReactForms;
