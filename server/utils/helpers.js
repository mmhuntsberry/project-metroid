export const reduceFilter = (parent, list) => {
  return parent.reduce((filtered, id) => {
    list.filter((item) => {
      if (item.id === id) {
        filtered.push(item);
      }
    });

    return filtered;
  }, []);
};
