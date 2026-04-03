import { caeserCipher } from "../utilities/caeser-cipher.js";

describe("Encryption using caeser-cipher algorithm", () => {
  it("shifts based on a provided shift factor e.g 4", () => {
    expect(caeserCipher("abc", 4)).toBe("efg");
  });
  it("wraps back to beginning of the alphabet when required", () => {
    expect(caeserCipher("xyz", 3)).toBe("abc");
  });
  it("Is Case Sensitve", () => {
    expect(caeserCipher("XYZ", 3)).toBe("ABC");
  });
  it("Maintains white spaces and special characters", () => {
    expect(caeserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
