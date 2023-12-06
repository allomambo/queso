import { describe, expect, test } from "vitest";
import mailTo from "./mailTo";

test("capitalize works", () => {
    const str = "all@mambomambo.ca";
    expect(mailTo(str)).toBe(`mailto:${str}`);
});
