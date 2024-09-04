import { JSLINK } from '../components/fe/javascript/js-link-tree';
import { REACT_LINK } from '../components/fe/react/react-link-tree';
import { IMenuItem } from '../components/shared/navigation-menu/navigation-menu.types';
import { IPDFBookViewerItemType } from '../components/shared/pdf-book-viewer/pdf-book-viewer';
import {
  BOOK_LINKS,
  DeviceType,
  MAX_WORD_PER_MIN,
  THEME_CONSTANT
} from './app-constants';
import { ImagePaths } from './image-path-constants';

export const getOnPageItems = (currentPath: string, allItems: Array<any>) => {
  if (!allItems || !currentPath) {
    return [];
  }
  return allItems.find((itm: any) => itm.link === currentPath);
};

export const populateId = (str: string) => {
  if (!str) {
    return '';
  }
  return str
    .toString()
    .replace(/[^a-zA-Z ]/g, '')
    .replaceAll(' ', '_');
};

export const buildChildren = (
  childList: Array<any>,
  iteration: number,
  childLIList: Array<any>
) => {
  childList.map((itm: any) => {
    childLIList.push({
      iteration,
      label: itm.label,
      altLabel: itm.altLabel,
      shortLabel: itm.shortLabel
    });
    if (itm.children) {
      buildChildren(itm.children, iteration + 1, childLIList);
    }
  });

  return childLIList;
};

export const isIOS = () => {
  const navigator: any = window.navigator;

  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes((navigator.userAgentData || navigator).platform) ||
    ((
      (navigator.userAgentData && navigator.userAgentData.platform) ||
      navigator.userAgent
    ).includes('Mac') &&
      'ontouchend' in document)
  );
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const scrollToQText = () => {
  const queryPart = location.href.split('?');
  if (queryPart && queryPart[1]) {
    const keyValuePair = (queryPart[1] || '').split('=');
    const id = keyValuePair && keyValuePair[1] ? keyValuePair[1] : null;

    if (id) {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 50, behavior: 'smooth' });
      }
    }
    return;
  }

  scrollToTop();
};

export const getGroupedMenu = (routePathArray: Array<IMenuItem>) => {
  const groupCategory = routePathArray
    .map((item: IMenuItem) => item.group)
    .filter((value, index, self) => self.indexOf(value) === index);

  const groupedMenu = groupCategory.map((itm: any) => {
    return {
      label: itm,
      children: routePathArray.filter((rt: IMenuItem) => rt.group === itm)
    };
  });

  return groupedMenu;
};

export const generateSiteMap = () => {
  const pathArr: Array<string> = [];
  const domain = 'https://ui-geeks.in/#';

  const buildLinks = (links: Array<any>) => {
    links.map((rt: any) => {
      const childList = rt.children ? buildChildren(rt.children, 0, []) : [];

      pathArr.push(`${domain}${rt.link}`);

      if (childList && childList.length > 0) {
        childList.map((ch: any) => {
          pathArr.push(
            `${domain}${rt.link}?qtext=${populateId(ch.shortLabel || ch.label)}`
          );
        });
      }
    });
  };

  // buildLinks(JSLINK);
  // buildLinks(REACT_LINK);
  // buildLinks(JS_BLOG_LINK);

  console.log(pathArr.join('\n'));
};

export const THEME = {
  getTheme: () => {
    return (
      localStorage.getItem(THEME_CONSTANT.KEY) || THEME_CONSTANT.DARK_THEME
    );
  },
  setTheme: (themeValue: string) => {
    localStorage.setItem(THEME_CONSTANT.KEY, themeValue);
  }
};

export const isLargeDevice = (deviceType: string) => {
  return [DeviceType.Desktop, DeviceType.LargeDesktop].includes(deviceType);
};

export const getTechImageUrl = (tech: string) => {
  switch (tech) {
    case 'ReactJs':
      return ImagePaths.TECH.REACT;

    case 'Redux':
      return ImagePaths.TECH.REDUX;

    case 'Angular Js':
    case 'Angular':
      return ImagePaths.TECH.ANGULAR;

    case 'NodeJs':
      return ImagePaths.TECH.NODE;

    case 'AWS':
      return ImagePaths.TECH.AWS;

    case 'Web API':
      return ImagePaths.TECH.DOT_NET;

    case 'JQuery':
      return ImagePaths.TECH.JQUERY;

    case 'JavaScript':
      return ImagePaths.TECH.JS;

    case 'TypeScript':
      return ImagePaths.TECH.TS;

    case 'CSS':
    case 'SCSS':
      return ImagePaths.TECH.CSS;

    case 'NextJs':
      return ImagePaths.TECH.NEXTJS;

    default:
      return '';
  }
};

export const getChapterPDFUrl = (currentPath: string) => {
  if (!currentPath) {
    return null;
  }

  let url = null;
  const allChapters = [
    ...BOOK_LINKS.REACT.CHAPTERS,
    ...BOOK_LINKS.JAVASCRIPT.CHAPTERS
  ];

  url = allChapters.find((chapter: IPDFBookViewerItemType) => {
    if (Array.isArray(chapter.id)) {
      return chapter.id.includes(currentPath);
    }

    return chapter.id === currentPath;
  });

  return url;
};

const getHrAndMin = (mins: number) => {
  const min = mins % 60;
  const hours = Math.floor(mins / 60);

  if (hours > 0) {
    return `${hours} hr` + (min > 0 ? ` ${min} mins` : '');
  }

  return `${min} mins`;
};
export const getTotalReadTime = () => {
  const JSTime = JSLINK.reduce(
    (accumulator, currentValue) => accumulator + currentValue.wordCount,
    0
  );

  const ReactTime = REACT_LINK.reduce(
    (accumulator, currentValue) => accumulator + currentValue.wordCount,
    0
  );

  console.log(
    'JavaScript Read Time: ' + getHrAndMin(Math.ceil(JSTime / MAX_WORD_PER_MIN))
  );
  console.log(
    'React Read Time: ' + getHrAndMin(Math.ceil(ReactTime / MAX_WORD_PER_MIN))
  );
};
