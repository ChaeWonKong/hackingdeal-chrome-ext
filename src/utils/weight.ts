// volume weight, actual weight related.

/**
 * Calculate Volume Weight(lb) based on inches
 * @param w width in inches
 * @param h height in inches
 * @param l length in inches
 * @returns volume weight in pounds(lb)
 */
export const calcVolWeight = (w: number, h: number, l: number) =>
  (w * h * l) / 166;

/**
 * Convert ounces to pounds
 * @param oz ounces to convert to pounds
 * @returns pounds
 */
export const convertOuncesToPounds = (oz: number) => oz * 16;
