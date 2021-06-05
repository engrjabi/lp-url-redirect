const alphaHashes = "bcdfghjklmnpqrstvwxyzaeiou";
const numericHashes = "0123456789";

export function doCipher(input: string, salt: string) {
  if (input == null || input === "") {
    return "";
  }

  const encryptedInput = String(input);
  const dictionaryRaw = alphaHashes.concat(numericHashes);
  const dictionaryRawArr = dictionaryRaw.split("");

  salt.split("").forEach((saltCharacter, index, saltArray) => {
    const currentCharIndex = dictionaryRawArr.indexOf(saltCharacter);
    const nextCharIndex = dictionaryRawArr.indexOf(saltArray[index + 1]);

    if (nextCharIndex !== -1) {
      const currentCharPlaceHolder = dictionaryRawArr[currentCharIndex];
      dictionaryRawArr[currentCharIndex] = dictionaryRawArr[nextCharIndex];
      dictionaryRawArr[nextCharIndex] = currentCharPlaceHolder;
    }
  });

  const dictionaryRawReverse = [...dictionaryRawArr].reverse();
  const cipherDictionary: { [key: string]: string } = {};

  dictionaryRawArr.forEach((dictionaryCharacter, index) => {
    cipherDictionary[dictionaryCharacter] = dictionaryRawReverse[index];
  });

  return encryptedInput
    .split("")
    .map((input) => {
      if (encryptedInput && cipherDictionary[input.toLowerCase()]) {
        return cipherDictionary[input.toLowerCase()];
      }

      return input;
    })
    .join("");
}
