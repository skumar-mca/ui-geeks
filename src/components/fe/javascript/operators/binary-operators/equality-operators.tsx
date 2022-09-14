import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, BI, I, NewLine } from '../../../../shared/util/util';

const JSBinaryEqualityOperators = () => {
  return (
    <>
      <Para>
        <Heading as='h3'>Equality Operators</Heading>
        Used to check the equality of the operands, and returns a boolean value,
        based on whether comparison is <BI>true</BI> or <BI>false</BI>.
      </Para>

      <NewLine />
      <Heading as='h4'>Type Coercion</Heading>
      <Para>
        The double equality (==) and inequality (!=) operator performs type
        <BI>coercion</BI>, if it received different types.
        <I>Type Coercion</I> is automatic or implicit conversion of values from
        one data type to another.
      </Para>
      <NewLine />

      <Para>
        <Heading as='h5'>Equality "==" Operator</Heading>
        Attempts to convert <I>(Type Coercion)</I> and compare operands for
        equality. Returns
        <B>boolean</B> value.
        <Code>
          {`"1" == 1      // true
"hello" == "hello"      // true`}
        </Code>
      </Para>
      <NewLine />

      <Para>
        <Heading as='h5'>InEquality "!=" Operator</Heading>
        Attempts to convert <I>(Type Coercion)</I> and compare operands for
        inequality. Returns <B>boolean</B> value.
        <B>boolean</B> value.
        <Code>
          {`"1" != 1      // false
"Hello" != "hello"      // false`}
        </Code>
      </Para>
      <NewLine />

      <Para>
        <Heading as='h5'>Strict Equality "===" Operator</Heading>
        Strict equality operator, checks for equality of operands,
        <B>without</B> converting <I>(Type Coercion)</I> the values before
        comparison. This considers operands of different types to be different.
        Returns
        <B>boolean</B> value.
        <Code>
          {`"1" === 1    // false
1 === 1    // true`}
        </Code>
      </Para>
      <NewLine />

      <Para>
        <Heading as='h5'>Strict InEquality "!==" Operator</Heading>
        Strict inequality operator, checks for inequality of operands,{' '}
        <B>without</B>
        converting <I>(Type Coercion)</I> the values before comparison. This
        considers operands of different types to be different. Returns
        <B>boolean</B> value.
        <Code>
          {`"1" !== 1   // true
2 !== 2     // false`}
        </Code>
      </Para>
    </>
  );
};

export default JSBinaryEqualityOperators;
