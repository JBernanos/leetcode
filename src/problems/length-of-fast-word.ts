export default (s: string): number => {
  const splitedString: string[] = s
    .split(" ")
    .filter((item: string) => item != "");
  return splitedString[splitedString.length - 1].length;
};
