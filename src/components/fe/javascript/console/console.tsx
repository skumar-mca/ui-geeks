import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType, TextAlignTypes } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { NewLine, OrderedList } from '../../../shared/util/util';
import Word from '../../../shared/word/word';
import YALSImage from '../../../shared/yals-image/yals-image';

const JSConsole = () => {
  useDOMTitle('YALS: JavaScript | Console');

  const REPLSteps: Array<IOrderedListItemType> = [
    {
      label: 'Read user input (i.e., JavaScript code expression).'
    },
    {
      label: 'Evaluate/Run the code.'
    },
    {
      label: 'Print the result.'
    },
    {
      label: 'Loop back to Step 1 (i.e., wait for user input).'
    }
  ];

  return (
    <Container>
      <Heading>JavaScript Console</Heading>
      <Para>
        JavaScript could be tested in multiple ways.
        <Word bold>"Browser Console"</Word> being the most easily available,
        powerful yet simple tool. Every modern browser has a JavaScript Console,
        which allows users to write/test JavaScript code.
      </Para>

      <Para>
        <Word bold>Ways of opening console:</Word> Below are the steps to open
        console in most popular browsers. Other browsers should also have a
        similar flow to the open console.
      </Para>

      <Para>
        <Word bold>On Chrome/Safari/Opera browser</Word>
        <NewLine />
        <Word>
          Right click on page &gt; Click on <Word bold>Inspect Element</Word>{' '}
          &gt; Click on
          <Word bold>Console</Word> tab.
        </Word>
      </Para>

      <Para>
        <Word bold>On Firefox browser</Word>
        <NewLine />
        <Word>
          <Word bold>Tools</Word> Menu &gt; Click on{' '}
          <Word bold>Web Developer</Word> &gt; Click on
          <Word bold>Web Console</Word>.
        </Word>
      </Para>

      <Para>
        <Word bold>REPL (Read-Eval-Print-Loop)</Word> is running under the hood
        of every console. REPL follows the given steps:
        <NewLine />
        <OrderedList items={REPLSteps} />
      </Para>

      <Para>
        <Word underline italic>
          Example:
        </Word>
        <Space /> Try running statement:
        <Word bold italic>
          console.log("Hello from JavaScript");
        </Word>
      </Para>

      <Para textAlign={TextAlignTypes.Center}>
        <YALSImage
          imagePath='/images/console-hello-js.png'
          imageTitle='JavaScript Console'
          alt='JavaScript Console'
        />
      </Para>

      <Para>
        The above statement will give two lines of output. The first line will
        print
        <Word italic bold>
          "Hello from JavaScript"
        </Word>
        (as the output of the statement). The second line will print{' '}
        <Word italic bold>
          undefined
        </Word>
        (as the result of evaluating the expression).
      </Para>
      <Para>
        In JavaScript, every expression has a result. But few expressions like
        <Word italic>console.log( )</Word> returns nothing and in JavaScript{' '}
        <Word italic bold>
          "nothing"
        </Word>
        is represented as
        <Word italic bold>
          undefined
        </Word>
        .
      </Para>
    </Container>
  );
};

export default JSConsole;
