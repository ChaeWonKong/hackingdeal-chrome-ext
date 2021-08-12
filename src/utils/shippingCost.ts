import { calcVolWeight } from "./weight";
import { roundNumberToGivenDecimalPlaces } from "./math";

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
  // Base cost is $5
  const finalPrice = 5;

  // Use Bigger one; Volume weight and actual weight
  const finalWeight = Math.max(calcVolWeight(w, h, l), pounds);

  // if one side is bigger than equal 50inch or sum of three sides is bigger than equal 70inches,
  // add $5 additional cost
  if (w + h + l >= 70 || w >= 50 || h >= 50 || l >= 50) {
    finalPrice + 5;
  }

  return roundNumberToGivenDecimalPlaces(
    finalPrice + 1.5 * (finalWeight - 1),
    2
  );
};
