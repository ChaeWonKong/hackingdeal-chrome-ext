/**
 * Calculate Oh My Zip Shipping Price
 * @param w width in inches
 * @param h height in inches
 * @param l length in inches
 * @param pounds max of actual weight and volume weight
 * @returns
 */
export const calcOhmyzipShippingCost = (
  w: number,
  h: number,
  l: number,
  pounds: number
) => {
  const finalPrice = 5;

  // if one side is bigger than equal 50inch or sum of three sides is bigger than equal 70inches,
  // add $5 additional cost
  if (w + h + l >= 70 || w >= 50 || h >= 50 || l >= 50) {
    finalPrice + 5;
  }

  return finalPrice + 1.5 * (pounds - 1);
};
