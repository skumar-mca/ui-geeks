import classNames from 'classnames';
import React, { memo } from 'react';
import { AppPrefix } from '../../util/app-constants';
import { ImagePaths } from '../../util/image-path-constants';
import JSHomeDemoComponent from '../fe/javascript/js-home-demo-component/js-home-demo-component';
import { JS_PRIMARY_ROUTES } from '../fe/javascript/js-menu-items';
import ReactHomeDemoComponent from '../fe/react/react-home-demo-component/react-home-demo-component';
import { REACT_PRIMARY_ROUTES } from '../fe/react/react-menu-items';
import IconAward from '../icons/icon-award';
import IconChapter from '../icons/icon-chapter';
import IconHourGlass from '../icons/icon-hour-glass';
import IconPdf from '../icons/icon-pdf';
import HomeIntro from './home-intro/home-intro';
import './home.scss';
import LanguageComponent from './language-component/language-component';
import UpcomingTopicsComponent from './upcoming-topics/upcoming-topics';

const JSContentList = [
  {
    content: <>JavaScript is Interpreted/JIT compiled.</>
  },
  {
    content: <>With NodeJs, JavaScript can run on non-browser environments.</>
  },
  {
    content: <>Functions are treated as first-class citizens.</>
  },
  {
    content: <>It was created by Brenden Eich at NetScape in 1995.</>
  },
  {
    content: <>Primarily there are 7 types in JavaScript.</>
  },
  {
    content: <>functions are just special type of object.</>
  },
  {
    content: (
      <>Objects are a way of grouping similar/meaningful data together.</>
    )
  },
  {
    content: (
      <>Array.unshift() function prepends items to the start of the array.</>
    )
  }
];

const JSKeyPoints = (
  <div className='topic-key-points'>
    <ul>
      <li>
        <IconChapter height={15} width={15}></IconChapter> 19 Chapters
      </li>
      <li>
        <IconHourGlass height={15} width={15} /> 1 hours 30 mins read
      </li>
      <li>
        <IconAward height={15} width={15} /> 200+ quiz questions
      </li>
      <li>
        <IconPdf height={15} width={15} />
        PDF version of each chapter
      </li>
    </ul>
  </div>
);

const ReactContentList = [
  {
    content: <>React is a JavaScript library for building user interfaces.</>
  },
  {
    content: (
      <>Components let you split the UI into independent, reusable pieces.</>
    )
  },
  {
    content: <>User-Defined Components must be Capitalized.</>
  },
  {
    content: (
      <>
        A higher-order component is a function that takes a component and
        returns a new component.
      </>
    )
  }
];

const ReactKeyPoints = (
  <div className='topic-key-points'>
    <ul>
      <li>
        <IconChapter height={15} width={15}></IconChapter> 11 Chapters
      </li>
      <li>
        <IconHourGlass height={15} width={15} /> 1 hour read
      </li>
      <li>
        <IconPdf height={15} width={15} />
        PDF version of each chapter
      </li>
    </ul>
  </div>
);

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
          imagePath={ImagePaths.JS.ICON}
          homePagePath='/javascript/home'
          theme='yellow'
          demoComponent={<JSHomeDemoComponent />}
          demoLink={JS_PRIMARY_ROUTES.DEMO}
          keyPoints={JSKeyPoints}
        />

        <LanguageComponent
          title='React'
          tag='Build reusable interfaces'
          contentList={ReactContentList}
          imagePath={ImagePaths.REACT.ICON}
          homePagePath='/react/home'
          theme='lightGreen'
          demoComponent={<ReactHomeDemoComponent />}
          demoLink={REACT_PRIMARY_ROUTES.DEMO}
          keyPoints={ReactKeyPoints}
        />

        <UpcomingTopicsComponent />

        {/* <LanguageComponent
          title='Angular'
          tag={`The modern web developer's platform`}
          contentList={AngularContentList}
          imagePath={ImagePaths.Angular}
          homePagePath='/javascript/introduction'
          theme='red'
        /> */}
      </div>
    </>
  );
};

export default memo(Home);
