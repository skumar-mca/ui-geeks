import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, BI, I } from '../../../../shared/util/util';

const JSForOfLoop = () => {
  return (
    <>
      <Heading as='h3'>for...of loop</Heading>
      <Para>
        This creates a loop iterating over <BI>iterable objects</BI>, including
        built-in
        <B>String</B>, <B>Array</B>, <B>array like objects</B> (Example:
        <I>arguments</I> or <I>NodeList</I>), TypedArray, Map, Set and user
        defined iterables.
      </Para>
      <Code>
        {`const arr = ["a", "b", "c"];
for(const itm of arr) {
	console.log(itm);
}

// Output:
"a"
"b"
"c"
`}
      </Code>
    </>
  );
};

export default JSForOfLoop;
