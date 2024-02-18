export function minTwoDigits(n: number): string {
  return (n < 10 ? "0" : "") + n;
}

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.substring(1);
}

export function getTitleWords(value: string): string {
  const wordRegex = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;

  const word = value.match(wordRegex)?.join(" ") as string;

  const capitalizedWord = capitalize(word);

  return capitalizedWord;
}

export function getFilename(value: string): string {
  const regex = /\//gi;
  const name = value.replace(regex, ".").split(".").slice(-2).shift() as string;
  return name;
}

export function getRandomAudioParameter() {
  return "?a=" + Math.random();
}
