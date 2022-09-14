import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import { B, BI } from '../../../shared/util/util';
import JSAsyncScriptLoading from './async-loading';
import JSDeferScriptLoading from './defer-loading';
import JSScriptLoadingIntro from './script-loading-intro';

const JSScriptLoading = () => {
  useDOMTitle('YALS: JavaScript | Script Loading Strategies');

  return (
    <Container>
      <Heading>Script Loading Strategies</Heading>

      <Para>
        <JSScriptLoadingIntro />
        <JSAsyncScriptLoading />
        <JSDeferScriptLoading />
      </Para>

      <Para>
        The <BI>async</BI> and <BI>defer</BI> both instruct the browser to
        download the scripts in a separate thread, while the rest of the page is
        loading, so the page loading is not blocked.
      </Para>

      <Note>
        An old-fashioned solution was to put all <B>{`<script>`}</B> tags at the
        <B>bottom of the {`<body>`}</B> tag, so that it would load after all
        HTML has been parsed. The problem with this solution is that
        loading/parsing for the script is completely blocked until the HTML has
        been loaded. On larger sites with lots of JavaScript files, this can
        cause a <B>major performance issue</B>.
      </Note>
    </Container>
  );
};

export default JSScriptLoading;
