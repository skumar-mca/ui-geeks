import { IMenuItem } from '../components/shared/navigation-menu/navigation-menu.types';

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
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
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
