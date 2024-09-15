const symbolValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export default (s: string): number => {
  let acc: number = 0;
  let index: number = 0;
  while (index < s.length) {
    if (["I", "X", "C"].includes(s[index])) {
      if (s[index] === "I") {
        if (["V", "X"].includes(s[index + 1])) {
          acc += s[index + 1] === "V" ? 4 : 9;
          index += 2;
          continue;
        }
      }

      if (s[index] === "X") {
        if (["L", "C"].includes(s[index + 1])) {
          acc += s[index + 1] === "L" ? 40 : 90;
          index += 2;
          continue;
        }
      }

      if (s[index] === "C") {
        if (["D", "M"].includes(s[index + 1])) {
          acc += s[index + 1] === "D" ? 400 : 900;
          index += 2;
          continue;
        }
      }
    }

    acc += symbolValues[`${s[index]}`];
    index += 1;
  }

  return acc;
};
