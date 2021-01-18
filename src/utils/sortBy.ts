export function sortBy(property: string, reverse = false) {
  return function (a, b) {
    const reverseResult = reverse ? 1 : -1;
    const result =
      a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0;

    return result * reverseResult;
  };
}
