export function caeserCipher(string, shiftFactor) {
  const characters = string.split("");
  //lowercase 97-122
  //upperCase 65-90
  const isALowerCaseLetter = (unicode) => unicode >= 97 && unicode <= 122;
  const isAnUpperCaseLetter = (unicode) => unicode >= 65 && unicode <= 90;
  const wrapAround = (char, letterCase) => {
    let count = shiftFactor;
    if (letterCase === "lowercase") {
      while (char <= 122) {
        char += 1;
        count -= 1;
      }
      char = 97 + count;
    } else {
      while (char <= 90) {
        char += 1;
        count -= 1;
      }
      char = 65 + count;
    }
    return String.fromCharCode(char);
  };

  characters.forEach((_, index) => {
    characters[index] = string.charCodeAt(index);
  });
  characters.forEach((char, index) => {
    let newCode = char + shiftFactor;
    if (isALowerCaseLetter(char)) {
      //proceed as a lowercase letter
      newCode > 122
        ? (characters[index] = wrapAround(char, "lowercase"))
        : (characters[index] = String.fromCharCode(newCode));
    } else if (isAnUpperCaseLetter(char)) {
      newCode > 90
        ? (characters[index] = wrapAround(char, "uppercase"))
        : (characters[index] = String.fromCharCode(newCode));
    } else {
      characters[index] = String.fromCharCode(char);
    }
  });

  return characters.join("");
}
