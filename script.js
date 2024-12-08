function highestRank(arr) {
  return arr.sort(
    (a, b) =>
      arr.filter((i) => i === b).length - arr.filter((i) => i === a).length
  )[0];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
