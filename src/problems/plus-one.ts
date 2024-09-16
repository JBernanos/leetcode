export default (digits: number[]): number[] => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      if (i != digits.length - 1) digits[i + 1] = 0;
      break;
    }

    digits[i] = 0;
    if (i === 0) digits.unshift(1);
  }

  return digits;
};
