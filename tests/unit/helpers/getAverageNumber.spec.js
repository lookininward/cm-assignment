import getAverageNumber from "@/helpers/getAverageNumber";

describe("get average number from array of numbers", () => {
  const cases = [
    [[0], 0],
    [[0, 0.5], 0.25],
    [[0, 0.5, 1], 0.5],
    [[0, 0.5, 1, 1.5], 0.75],
    [[0, 0.5, 1, 1.5, 2], 1],
    [[0, 0.5, 1, 1.5, 2, 2.5], 1.25],
    [[0, 0.5, 1, 1.5, 2, 2.5, 3], 1.5],
    [[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], 1.75],
    [[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4], 2],
    [[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5], 2.25],
    [[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5], 2.5],
    [[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5], 2.7083333333333335]
  ];
  test.each(cases)("given %p, returns %p", (ratings, expectedResult) => {
    expect(getAverageNumber(ratings)).toStrictEqual(expectedResult);
  });
});
