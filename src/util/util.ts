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
