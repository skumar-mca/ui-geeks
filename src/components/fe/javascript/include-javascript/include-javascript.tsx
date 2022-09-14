import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { TextAlignTypes } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { Indent, NewLine, ScriptTag } from '../../../shared/util/util';
import Word from '../../../shared/word/word';

const JSInclude = () => {
  useDOMTitle('YALS: JavaScript | How To Include Code');

  return (
    <Container>
      <Heading>How to include JavaScript code in webpage</Heading>
      <Para>
        <Word bold>
          <ScriptTag />
        </Word>
        tag is used for adding JavaScript code to a webpage. There are two ways
        of adding code via <ScriptTag /> tag.
      </Para>

      <Para>
        <ol>
          <li>
            Inline Script: In this, JavaScript code is written as the content of
            the script tag.
            <NewLine />
            <Word italic>
              <ScriptTag />
            </Word>
            <NewLine />
            <span style={{ marginLeft: '25px' }}>
              console.log("JavaScript code from inline script");
            </span>
            <Para>
              <ScriptTag closing />
            </Para>
          </li>

          <li>
            External Script: In this, a file(.js), containing the code is linked
            to the webpage via the
            <Word bold italic>
              "src"
            </Word>
            <Space />
            attribute of the script tag.
            <Para textAlign={TextAlignTypes.Left}>
              <Word italic>
                <ScriptTag>
                  <Word bold>src='path-to-external-javascript-file'</Word>
                </ScriptTag>
                <ScriptTag closing />
              </Word>
            </Para>
          </li>
        </ol>
      </Para>

      <Note>
        If we write internal and external script in a single &lt;script&gt; tag,
        in this case, inline script will be ignored. For example:
        <NewLine />
        <NewLine />
        <ScriptTag>
          <Word bold>src='path-to-external-javascript-file'</Word>
        </ScriptTag>
        <NewLine />
        <Indent>
          console.log("I will not be executed, will be ignored.");
        </Indent>
        <Para>
          <ScriptTag closing />
        </Para>
      </Note>
    </Container>
  );
};

export default JSInclude;
