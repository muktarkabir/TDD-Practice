import reverseString from "../utilities/reverse-string.js";
test("takes a string and returns it reversed", () => {
  expect(reverseString("fish")).toBe("hsif");
  expect(reverseString("money")).toBe("yenom");
});
