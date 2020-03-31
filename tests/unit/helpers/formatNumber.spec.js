import formatNumber from '@/helpers/formatNumber'

describe('format numbers with comma separation', () => {
  const cases = [
    [0, '0'],
    [100, '100'],
    [498.9789, '498.9789'],
    [1374.23344, '1,374.23344'],
    [42089.23, '42,089.23'],
    [1532089.986, '1,532,089.986']
  ];
  test.each(cases)("given %p and %p, returns %p", (number, expectedResult) => {
    expect(formatNumber(number)).toBe(expectedResult)
  });
})
