export const intersperse = (arr, type, delim) => {
  if (arr.length === 0) {
    return [];
  }

  console.log(type);

  const results = arr.reduce((xs, x, i) => {
    return i < arr.length - 1
      ? xs.concat([`${x[type]}${delim}`])
      : xs.concat([`${x[type]}`]);
  }, "");

  return results;
};
