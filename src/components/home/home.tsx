import React, { memo } from 'react';
import HomeIntro from './home-intro/home-intro';
import LanguageComponent from './language-component/language-component';

const Home = () => {
  return (
    <>
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
        homePagePath='/fe/javascript/introduction'
        theme='lightGreen'
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
        theme='lightGray'
      />

      <LanguageComponent
        title='Angular'
        tag='Build reusable interfaces'
        contentList={[
          { content: 'JavaScript is Interpreted/JIT compiled.' },
          { content: 'JavaScript works in strict-mode and non-strict mode.' },
          { content: 'JavaScript supports multi-paradigm.' },
          { content: 'JavaScript follows Declarative and Imperative style.' }
        ]}
        imagePath='images/react-icon.png'
        homePagePath='/fe/javascript/introduction'
        theme='yellow'
      />
    </>
  );
};

export default memo(Home);
