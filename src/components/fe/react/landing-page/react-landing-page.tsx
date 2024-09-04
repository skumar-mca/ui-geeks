import React, { useEffect, useState } from 'react';
import { ImagePaths } from '../../../../util/image-path-constants';
import LandingPageWrapper from '../../../shared/landing-page-wrapper/landing-page-wrapper';
import TopicBooks from '../../../shared/topic-books/topic-books';
import ReactDefinition from '../introduction/definition';
import { REACT_LINK } from '../react-link-tree';
import { getReactGroupedMenu } from '../react-menu-items';

const ReactLandingPage = () => {
  const [menuTree, setMenuTree] = useState<Array<any>>([]);

  useEffect(() => {
    setMenuTree(() => getReactGroupedMenu());
  }, []);

  return (
    <LandingPageWrapper
      linksMenu={REACT_LINK}
      imagePath={ImagePaths.REACT.ICON}
      title='React'
      wordCloudUrl={ImagePaths.REACT.WORD_CLOUD}
      menuTree={menuTree}
      books={<TopicBooks title='React' showDescription={true} />}
    >
      <ReactDefinition />
    </LandingPageWrapper>
  );
};

export default ReactLandingPage;
