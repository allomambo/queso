import { expect, test } from "vitest";
import toTel from "./toTel";

test("toTel works", () => {
    const str = "888-888-8888";
    expect(toTel(str)).toBe("tel:+8888888888");
});
