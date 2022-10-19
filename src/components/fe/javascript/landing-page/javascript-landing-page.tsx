import React from 'react';
import { ImagePaths } from '../../../../util/image-path-constants';
import LandingPageWrapper from '../../../shared/landing-page-wrapper/landing-page-wrapper';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B } from '../../../shared/util/util';
import { JS_BLOG_LINK } from '../blogs/js-blog-link-tree';
import { JSLINK } from '../js-link-tree';
import { JS_routePrefix } from '../js-menu-items';

const JSLandingPage = () => {
  const menuTree = [
    {
      label: '',
      children: [
        {
          url: `${JS_routePrefix}introduction`,
          label: 'Introduction'
        },
        {
          url: `${JS_routePrefix}history`,

          label: 'History'
        },
        {
          url: `${JS_routePrefix}include-code`,
          label: 'Including Scripts'
        },
        {
          url: `${JS_routePrefix}console`,
          label: 'Console'
        }
      ]
    },
    {
      label: 'Fundamental Concepts',
      children: [
        {
          url: `${JS_routePrefix}data-types`,
          label: 'Data types'
        },
        {
          url: `${JS_routePrefix}grammer`,

          label: 'Grammer and Types'
        },
        {
          url: `${JS_routePrefix}operators`,
          label: 'Operators'
        },
        {
          url: `${JS_routePrefix}control-structures`,
          label: 'Control Structures'
        },
        {
          url: `${JS_routePrefix}objects`,
          label: 'Objects'
        },
        {
          url: `${JS_routePrefix}arrays`,
          label: 'Arrays'
        },
        {
          url: `${JS_routePrefix}functions`,
          label: 'Functions'
        }
      ]
    },
    {
      label: 'Advanved Concepts',
      children: [
        {
          url: `${JS_routePrefix}closures`,
          label: 'Closures'
        },
        {
          url: `${JS_routePrefix}arrow-functions`,
          label: 'Arrow Functions'
        },
        {
          url: `${JS_routePrefix}modules`,
          label: 'Modules'
        },
        {
          url: `${JS_routePrefix}this-keyword`,
          label: 'this Keyword'
        },
        {
          url: `${JS_routePrefix}class-keyword`,
          label: 'Class'
        },
        {
          url: `${JS_routePrefix}prototype-chain`,
          label: 'Prototype Chain'
        },
        {
          url: `${JS_routePrefix}strict-mode`,
          label: 'Strict Mode'
        },
        {
          url: `${JS_routePrefix}hoisting`,
          label: 'Hoisting'
        },
        {
          url: `${JS_routePrefix}exception-handling`,
          label: 'Exception Handling'
        },
        {
          url: `${JS_routePrefix}iterators-and-generators`,
          label: 'Iterators and Generators'
        }
      ]
    }
  ];

  const customContentMenuTree = {
    label: 'Blogs',
    children: [
      {
        url: `${JS_routePrefix}blogs/get-user-location`,
        label: 'How to get user location.'
      }
    ]
  };
  return (
    <LandingPageWrapper
      linksMenu={JSLINK}
      menuTree={menuTree}
      customContentMenuTree={customContentMenuTree}
      imagePath='images/js-icon.png'
      title='JavaScript'
      wordCloudUrl={ImagePaths.JS.JS_WORD_CLOUD}
      blogList={JS_BLOG_LINK}
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
