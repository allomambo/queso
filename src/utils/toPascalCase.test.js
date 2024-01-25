import { expect, test } from "vitest";
import toPascalCase from "./toPascalCase";

test("converts string to pascal case", () => {
    const input = "hello World";
    const expectedOutput = "HelloWorld";
    const result = toPascalCase(input);
    expect(result).toBe(expectedOutput);
});
