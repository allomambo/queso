import { describe, expect, test } from "vitest";
import toKebab from "./toKebab";

test("converts string to kebab case", () => {
    const input = "hello World";
    const expectedOutput = "hello-world";
    const result = toKebab(input);
    expect(result).toBe(expectedOutput);
});
