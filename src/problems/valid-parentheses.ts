export default (s: string): boolean => {
  if (s.length % 2 != 0) return false;

  const parenthesesTypes = {
    open: ["(", "[", "{"],
    close: [")", "]", "}"],
  };

  let openers: string[] = [];
  let closers: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (parenthesesTypes.open.includes(s[i])) {
      openers.push(s[i]);
    }

    if (parenthesesTypes.close.includes(s[i])) {
      if (openers[openers.length - 1] === "") return false;

      closers.push(s[i]);
      if (s[i] === ")" && openers[openers.length - 1] != "(") return false;

      if (s[i] === "]" && openers[openers.length - 1] != "[") return false;

      if (s[i] === "}" && openers[openers.length - 1] != "{") return false;

      openers.pop();
    }
  }

  return closers.length === s.length / 2 ? true : false;
};
