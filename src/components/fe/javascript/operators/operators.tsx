import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B } from '../../../shared/util/util';
import JSBinaryOperators from './binary-operators/binary-operators';
import JSOperatorPrecedence from './operator-precedence';
import JSTernaryOperator from './ternary-operator';
import JSUnaryOperators from './unary-operators/unary-operators';

const JSOperators = () => {
  useDOMTitle('YALS: JavaScript | Operators');

  return (
    <Container>
      <Heading>Operators</Heading>
      <Para>
        JavaScript has a rich set of operators, which can be used to perform
        operations on given values. JavaScript has both <B>binary</B> and
        <B>unary</B>
        operators, and one special ternary operator.
      </Para>

      <JSBinaryOperators />
      <JSUnaryOperators />
      <JSTernaryOperator />
      <JSOperatorPrecedence />
    </Container>
  );
};

export default memo(JSOperators);
