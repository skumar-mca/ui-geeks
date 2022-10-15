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
  return str.toString().replace(/[^a-zA-Z]/g, '');
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
