import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, BI, IU, NewLine } from '../../../shared/util/util';

const JSOperatorPrecedence = () => {
  return (
    <>
      <Heading as='h3'>Operator Precedence</Heading>
      <Para>
        Some operators are applied before others, when calculating the result,
        this is called operator precedence. The operator precedence in
        JavaScript is the same as was taught in math. The calculation is always
        evaluated from <BI>left to right</BI>.
      </Para>

      <Para>
        <B>Evaluate below expression:</B>
        <NewLine />
        50 + 10 / 8 + 2
        <NewLine />
        <B>Step 1:</B> 50 + <IU>10 / 8</IU> + 2
        <NewLine />
        <B>Step 2:</B> <IU>50 + 1.25</IU> + 2
        <NewLine />
        <B>Step 3:</B> <IU>51.25 + 2</IU>
        <NewLine />
        <B>Result:</B> 53.25
      </Para>

      <Code>{`50 + 10 / 8 + 2   // 53.25`}</Code>
    </>
  );
};

export default JSOperatorPrecedence;
