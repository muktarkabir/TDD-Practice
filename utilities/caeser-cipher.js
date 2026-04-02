export function caeserCipher(string, shiftFactor) {
  const characters = string.split("");
//lowercase 97-122
//upperCase 65-90
  console.log(characters);
  characters.forEach((char, index) => {
    characters[index] = string.charCodeAt(index);
  });
  console.log(characters);
}

caeserCipher("MmUuktar");
