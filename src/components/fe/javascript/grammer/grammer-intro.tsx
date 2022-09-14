import React from 'react';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { OrderedList } from '../../../shared/util/util';
import Word from '../../../shared/word/word';

const JSGrammerIntro = () => {
  return (
    <>
      <Para>
        JavaScript is
        <Word bold italic>
          case-sensitive
        </Word>
        <Space />
        and uses the
        <Word bold italic>
          Unicode
        </Word>
        <Space />
        characters set. In JavaScript, instructions are called
        <Word bold>statements</Word> and are separated by
        <Word bold>semicolon (;)</Word>. A semicolon is not necessary after a
        statement, if it is written on its own line. But if more than one
        statement is written in a line, then they must be separated by
        semicolon.
      </Para>

      <Note>
        It is considered best practice to always write a semicolon after a
        statement. This practice reduces the chances of errors in the code.
      </Note>

      <Note>
        ECMAScript also has rules of Automatic Semicolon Insertion(ASI). Some
        JavaScript statements must be terminated with semicolon and are
        therefore affected by ASI. Few cases where ASI is executed:
        <OrderedList
          unOrdered
          items={[
            {
              label: 'Variable declaration using let, const, var.'
            },
            {
              label: 'Module declaration using import, export.'
            },
            {
              label: 'Expression statement.'
            },
            {
              label: 'debugger, continue, break, throw, return.'
            }
          ]}
        />
      </Note>

      <Para>
        The source code of JavaScript is scanned from
        <Word bold italic>
          left
        </Word>
        <Space />
        to
        <Word bold italic>
          right
        </Word>
        , and is converted into a sequence of input elements which are
        <Word bold italic>
          tokens
        </Word>
        ,
        <Word bold italic>
          control characters
        </Word>
        ,
        <Word bold italic>
          line terminators
        </Word>
        ,
        <Word bold italic>
          comments
        </Word>
        <Space />
        or
        <Word bold italic>
          whitespaces
        </Word>
        <Space />
        (Spaces, tabs and new line characters are considered as whitespace).
      </Para>
    </>
  );
};

export default JSGrammerIntro;
