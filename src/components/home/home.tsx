import classNames from 'classnames';
import React, { memo } from 'react';
import { AppPrefix, ImagePaths } from '../../util/app-constants';
import HomeFooter from './home-footer/home-footer';
import HomeIntro from './home-intro/home-intro';
import './home.scss';
import LanguageComponent from './language-component/language-component';

const Home = () => {
  const homeClasses = classNames({
    [`${AppPrefix}-home`]: true
  });

  return (
    <div className={homeClasses}>
      <HomeIntro />

      <LanguageComponent
        title='JavaScript'
        tag='Web Development Language'
        contentList={[
          { content: 'JavaScript is Interpreted/JIT compiled.' },
          { content: 'JavaScript works in strict-mode and non-strict mode.' },
          { content: 'JavaScript supports multi-paradigm.' },
          { content: 'JavaScript follows Declarative and Imperative style.' }
        ]}
        imagePath='images/js-icon.png'
        homePagePath='/fe/javascript-home'
        theme='yellow'
      />

      <LanguageComponent
        title='React'
        tag='Build reusable interfaces'
        contentList={[
          { content: 'JavaScript is Interpreted/JIT compiled.' },
          { content: 'JavaScript works in strict-mode and non-strict mode.' },
          { content: 'JavaScript supports multi-paradigm.' },
          { content: 'JavaScript follows Declarative and Imperative style.' }
        ]}
        imagePath='images/react-icon.png'
        homePagePath='/fe/javascript/introduction'
        theme='lightGreen'
      />

      <LanguageComponent
        title='Angular'
        tag={`The modern web developer's platform`}
        contentList={[
          { content: 'JavaScript is Interpreted/JIT compiled.' },
          { content: 'JavaScript works in strict-mode and non-strict mode.' },
          { content: 'JavaScript supports multi-paradigm.' },
          { content: 'JavaScript follows Declarative and Imperative style.' }
        ]}
        imagePath={ImagePaths.Angular}
        homePagePath='/fe/javascript/introduction'
        theme='red'
      />

      <HomeFooter />
    </div>
  );
};

export default memo(Home);
