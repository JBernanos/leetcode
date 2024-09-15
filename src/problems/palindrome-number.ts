export default (x: number): boolean => {
  const stringToAnalyze: string = x.toString();

  let reversedString: string = "";
  for (let i = stringToAnalyze.length - 1; i >= 0; i--) {
    reversedString += stringToAnalyze[i];
  }

  return stringToAnalyze === reversedString;
};
