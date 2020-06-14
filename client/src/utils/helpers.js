export const intersperse = (arr, delim) => {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce((xs, x, i) => {
    console.log(xs);
    return xs.concat([`${delim}${x}`]);
  }, arr[0]);
};
