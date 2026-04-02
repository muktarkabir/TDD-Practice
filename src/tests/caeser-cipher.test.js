import { caeserCipher } from "../utilities/caeser-cipher.js";

test("This test should encrypt a string using caeser-cipher based on a provided shift factor", () => {
    expect(caeserCipher('abc',4)).toBe('efg');
    expect(caeserCipher('xyz',3)).toBe('abc');
    expect(caeserCipher('XYZ',3)).toBe('ABC');
    expect(caeserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
