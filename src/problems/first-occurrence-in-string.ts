export default (haystack: string, needle: string): number => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const startPosition: number = i;
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] != haystack[i + j]) break;
        if (j === needle.length - 1) return startPosition;
      }
    }
  }

  return -1;
};
