import React from 'react';
import LandingPageWrapper from '../../../shared/landing-page-wrapper/landing-page-wrapper';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B } from '../../../shared/util/util';
import { JSLINK } from '../js-link-tree';

const JSLandingPage = () => {
  return (
    <LandingPageWrapper
      linksMenu={JSLINK}
      imagePath='images/js-icon.png'
      title='JavaScript'
      wordCloudUrl='https://live.staticflickr.com/65535/52383011714_14b54b9e25_b.jpg'
    >
      <Para>
        JavaScript (JS) is a light-weight,
        <B>interpreted</B> <Space /> or <B>just-in-time compiled</B> <Space />
        programming language with <Space /> <B>first-class functions</B>. It is
        <B>prototype-based</B>,<B> multi-paradigm</B>,<B>single threaded</B>,
        <B> dynamic language</B>, supporting <Space />
        <B>object-oriented</B>,<B> imperative</B> and <Space />
        <B>declarative</B> styles.
      </Para>
    </LandingPageWrapper>
  );
};

export default JSLandingPage;
