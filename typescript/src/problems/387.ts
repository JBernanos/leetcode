// https://leetcode.com/problems/first-unique-character-in-a-string/

class charOccurrences {
  [key: string]: number;
}

export function p387(input: string): number {
  const stringAnalyze: charOccurrences = analyzeString(input);
  const uniqueCharacter: string | undefined = getUniqueCharacter(stringAnalyze);

  if (!uniqueCharacter) return -1;

  for (let i = 0; i < input.length; i++) if (input[i] == uniqueCharacter) return i;

  return -1; // Handle function lacks, this return is never reached.
}

function analyzeString(input: string): charOccurrences {
  const stringAnalyze: charOccurrences = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i] in stringAnalyze) {
      stringAnalyze[input[i]] += 1;
    } else stringAnalyze[input[i]] = 1;
  }
  return stringAnalyze;
}

function getUniqueCharacter(stringAnalyze: charOccurrences): string | undefined {
  const keys: string[] = Object.keys(stringAnalyze);

  let uniqueCharacter: string | undefined;
  for (let i = 0; i < keys.length; i++) {
    if (stringAnalyze[keys[i]] == 1) {
      uniqueCharacter = keys[i];
      break;
    }
  }

  return uniqueCharacter;
}
