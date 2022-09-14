import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { BI, I, NewLine } from '../../../../shared/util/util';
import Word from '../../../../shared/word/word';

const JSArrowFunctionsArgumentBinding = () => {
  return (
    <>
      <Heading as='h4'>No binding of "arguments" object</Heading>
      <Para>
        The
        <BI>arguments</BI> is a reserved word which holds the list of arguments
        passed to the function. The arrow functions do not have their own
        <BI>arguments</BI> object.
      </Para>
      <Code>{`const show = () => arguments[0];
show();	// "ReferenceError: arguments is not defined"`}</Code>

      <NewLine />
      <Heading as='h4'>Returning "Object Literals"</Heading>
      <Para>
        Returning <BI>object literals</BI> from arrow functions with a
        <BI>concise body</BI> will not work as expected.
      </Para>
      <Code>
        {`const user = () => { name : "JavaScript" };
user();   // undefined
`}
      </Code>

      <Para>
        Because code inside curly braces ({}) is
        <BI>parsed as a sequence of statements</BI> (i.e., <I>"name"</I> is
        treated like a <BI>label</BI> and not as a <BI>key</BI> in object
        literal).
      </Para>

      <Para>
        <Word bold underline>
          Correct way
        </Word>
        <Space />
        to return object literal would be:
        <Code>{`const user = () => ({ name : "JavaScript" });`}</Code>
      </Para>
    </>
  );
};

export default JSArrowFunctionsArgumentBinding;
