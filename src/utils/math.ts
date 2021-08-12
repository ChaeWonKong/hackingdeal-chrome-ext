/**
 * Round given number to at most certain decimal places
 * @param n target number
 * @param d desired decimal places
 * @returns rounded number to desired decimal places
 */
export const roundNumberToGivenDecimalPlaces = (n: number, d: number) => {
  const dp = Math.pow(10, d);

  return Math.round(n * dp) / dp;
};
