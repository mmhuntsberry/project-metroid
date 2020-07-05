export const intersperse = (arr, delim) => {
  if (arr.length === 0) {
    return [];
  }
  const results = arr.reduce((xs, x, i) => {
    return i < arr.length - 1
      ? xs.concat([`${x.type}${delim}`])
      : xs.concat([`${x.type}`]);
  }, "");

  console.log(results);
  return results;
};
