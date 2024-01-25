import { expect, test } from "vitest";
import toCamelCase from "./toCamelCase";

test("converts string to camel case", () => {
    const input = "hello World";
    const expectedOutput = "helloWorld";
    const result = toCamelCase(input);
    expect(result).toBe(expectedOutput);
});
