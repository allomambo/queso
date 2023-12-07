import { describe, expect, test } from "vitest";
import tel from "./tel";

describe("tel", () => {
    test("tel works", () => {
        const str = "888-888-8888";
        expect(tel(str)).toBe("tel:+8888888888");
    });
});
