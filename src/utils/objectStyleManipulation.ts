/**
 * Merges and combines values from two objects based on specified conditions.
 *
 * @param defaultObj The default object with data.
 * @param comparisonObj The object for comparison with the default data.
 * @param useComparison If true, uses values from the comparison object; otherwise, uses values from the default object.
 *
 * @returns {string} A string that combines the selected values from the objects.
 */
export const mergeStyles = <T extends Record<string, any>>(
  defaultObj: T,
  comparisonObj: T,
  useComparison = false
): string => {
  const defaultKeys = Object.keys(defaultObj);
  const comparisonKeys = Object.keys(comparisonObj);
  let combinedValues: string[] = [];

  defaultKeys.forEach((key) => {
    const isInComparison = comparisonKeys.includes(key);

    if (isInComparison && comparisonObj.hasOwnProperty(key) && useComparison) {
      combinedValues.push(`${comparisonObj[key]}`);
    } else if (
      isInComparison &&
      comparisonObj.hasOwnProperty(key) &&
      !useComparison
    ) {
      combinedValues.push(`${defaultObj[key]}`);
    }
  });

  return combinedValues.join(" ");
};

export const combineStyles = <T extends Record<string, string>>(
  styleObject: T
) => {
  let className: string[] = [];

  for (const i in styleObject) className.push(styleObject[i]);

  return className.join(" ");
};
