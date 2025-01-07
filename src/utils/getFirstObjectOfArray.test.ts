import { describe, expect, test } from "vitest";
import getFirstObjectOfArray from "./getFirstObjectOfArray";

describe("getFirstObjectOfArray", () => {
    test("returns the first object from an array", () => {
        const data = [{ name: "cheese" }, { name: "ham" }];
        expect(getFirstObjectOfArray(data)).toEqual({ name: "cheese" });
    });

    test("returns null for an empty array", () => {
        const data: any[] = [];
        expect(getFirstObjectOfArray(data)).toBeNull();
    });

    test("returns the data itself if it's not an array", () => {
        const data = { name: "cheese" };
        expect(getFirstObjectOfArray(data)).toEqual({ name: "cheese" });
    });

    test("returns null if data is undefined", () => {
        const data = undefined;
        expect(getFirstObjectOfArray(data)).toBeNull();
    });
});
