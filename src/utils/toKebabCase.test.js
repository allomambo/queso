import { expect, test } from "vitest";
import toKebabCase from "./toKebabCase";

test("converts string to kebab case", () => {
    const input = "hello World";
    const expectedOutput = "hello-world";
    const result = toKebabCase(input);
    expect(result).toBe(expectedOutput);
});
