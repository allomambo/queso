import { expect, test } from "vitest";
import toSnakeCase from "./toSnakeCase";

test("converts string to snake case", () => {
    const input = "hello World";
    const expectedOutput = "hello_world";
    const result = toSnakeCase(input);
    expect(result).toBe(expectedOutput);
});
