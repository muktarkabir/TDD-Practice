import { capitalize } from "../utilities/capitalize.js";

test("takes a string and returns it with the first character capitalized", () => {
    expect(capitalize('fish')).toBe('Fish');
});
