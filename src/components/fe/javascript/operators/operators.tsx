import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B } from '../../../shared/util/util';
import YALSQuestionaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import { OperatorQuestions } from '../questionnaires/operator-questionnaire';
import JSBinaryOperators from './binary-operators/binary-operators';
import JSOperatorPrecedence from './operator-precedence';
import JSTernaryOperator from './ternary-operator';
import JSUnaryOperators from './unary-operators/unary-operators';

const JSOperators = () => {
  useDOMTitle('UI-Geeks: JavaScript | Operators');

  return (
    <Container>
      <Heading>Operators</Heading>

      <Para>
        JavaScript has a rich set of operators, which can be used to perform
        operations on given values. JavaScript has both <B>binary</B> and
        <B>unary</B> <Space /> operators, and one special ternary operator.
      </Para>

      <JSBinaryOperators />
      <JSUnaryOperators />
      <JSTernaryOperator />
      <JSOperatorPrecedence />

      <Para>
        <YALSQuestionaire questions={OperatorQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSOperators);
