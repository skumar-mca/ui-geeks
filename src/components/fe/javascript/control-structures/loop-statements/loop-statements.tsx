import React from 'react';
import useDOMTitle from '../../../../../custom-hooks/use-dom-title';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import { B, OrderedList } from '../../../../shared/util/util';
import JSDoWhileLoop from './do-while-loop';
import JSForInLoop from './for-in-loop';
import JSForLoop from './for-loop';
import JSForOfLoop from './for-of-loop';
import JSWhileLoop from './while-loop';

const JSLoops = () => {
  useDOMTitle('YALS: JavaScript | Looping/Iteration statements');

  return (
    <>
      <Heading as='h2'>Looping/Iteration statements</Heading>
      <Para>
        Iteration statements are used to iterate or loop a given set of
        statements until termination statement for the loop is reached. All
        loops consists of three expressions: Initialization expression:
        <OrderedList
          items={[
            {
              label: 'Defines the starting point of the loop.'
            },
            {
              label:
                'Termination expression: Defines the end point of the loop.'
            },
            {
              label: 'Update expression: Defined step value for the loop.'
            }
          ]}
        />
      </Para>

      <Para>
        <JSWhileLoop />
        <JSDoWhileLoop />
        <JSForLoop />
        <JSForOfLoop />
        <JSForInLoop />
      </Para>

      <Note>
        loops can be terminated forcefully using <B>break</B>, <B>throw</B> or
        <B>return</B>.
      </Note>
    </>
  );
};

export default JSLoops;
