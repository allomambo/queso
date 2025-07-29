import { expect, test } from "vitest";
import toMailTo from "./toMailTo";

test("toMailTo works", () => {
    const str = "all@mambomambo.ca";
    expect(toMailTo(str)).toBe(`mailto:${str}`);
});
