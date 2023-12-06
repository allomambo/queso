import { describe, expect, test } from "vitest";
import capitalize from "./capitalize";

describe("capitalize", () => {
    test("capitalize works", () => {
        const str = "test";
        expect(capitalize(str)).toBe("Test");
    });
});
