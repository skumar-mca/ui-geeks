import classNames from 'classnames';
import React, { memo } from 'react';
import { AppPrefix } from '../../util/app-constants';
import HomeIntro from './home-intro/home-intro';
import './home.scss';
import LanguageComponent from './language-component/language-component';

const JSContentList = [
  { content: 'JavaScript is Interpreted/JIT compiled.' },
  {
    content: 'With NodeJs, JavaScript can run on non-browser environments.'
  },
  { content: 'Functions are treated as first-class citizens.' },
  {
    content: 'It was created by Brenden Eich at NetScape in 1995.'
  },
  {
    content: 'Primarily there are 7 types in JavaScript.'
  },
  {
    content: 'functions are just special type of object.'
  },
  {
    content: 'Objects are a way of grouping similar/meaningful data together.'
  },
  {
    content: `Array.unshift() function prepends items to the start of the array.`
  }
];

const ReactContentList = [
  { content: 'React is a JavaScript library for building user interfaces.' },
  {
    content:
      'Components let you split the UI into independent, reusable pieces.'
  },
  { content: 'User-Defined Components Must Be Capitalized.' },
  {
    content:
      'A higher-order component is a function that takes a component and returns a new component.'
  }
];

const AngularContentList = [
  {
    content: 'Components are the main building block for Angular applications.'
  },
  {
    content: `Angular uses the browser's built-in Shadow DOM API to enclose the component's view inside a ShadowRoot`
  },
  {
    content:
      '@Input() and @Output() decorators are used to share data between parent and child component.'
  },
  {
    content:
      'In Angular, a template is a blueprint for a fragment of a user interface (UI).'
  },
  {
    content: `Angular's Change Detection algorithm is responsible for keeping the view and the model in sync.`
  }
];

const Home = () => {
  const homeClasses = classNames({
    [`${AppPrefix}-home`]: true
  });

  return (
    <>
      <div className={homeClasses}>
        <HomeIntro />

        <LanguageComponent
          title='JavaScript'
          tag='Web Development Language'
          contentList={JSContentList}
          imagePath='images/js-icon.png'
          homePagePath='/fe/javascript-home'
          theme='yellow'
        />

        <LanguageComponent
          title='React'
          tag='Build reusable interfaces'
          contentList={ReactContentList}
          imagePath='images/react-icon.png'
          homePagePath='/fe/react-home'
          theme='lightGreen'
        />

        {/* <LanguageComponent
          title='Angular'
          tag={`The modern web developer's platform`}
          contentList={AngularContentList}
          imagePath={ImagePaths.Angular}
          homePagePath='/fe/javascript/introduction'
          theme='red'
        /> */}
      </div>
    </>
  );
};

export default memo(Home);
