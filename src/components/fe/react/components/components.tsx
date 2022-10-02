import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../shared/util/util';
import ReactClassComponents from './class-components';
import ReactFunctionComponents from './function-components';
import ReactProps from './props/props';
import ReactState from './state/state';

const ReactComponents = () => {
  useDOMTitle('YALS: React | Components');

  return (
    <Container>
      <Heading>Components</Heading>
      <Para>
        Components let us split the UI into independent, reusable pieces, and
        think about each piece in isolation. Conceptually, components are like
        JavaScript <I>functions</I>. They accept arbitrary <B>inputs</B> (called
        <Space /> <BI>"props"</BI>) and return <BI>React elements</BI>.
      </Para>

      <Para>
        React provides two types of components:
        <OrderedList
          items={[
            { label: 'Function Components' },
            { label: 'Class Components' }
          ]}
        />
      </Para>

      <Para>
        <ReactFunctionComponents />
        <ReactClassComponents />
        <ReactProps />
        <ReactState />
      </Para>
    </Container>
  );
};

export default ReactComponents;
