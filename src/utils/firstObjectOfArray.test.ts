import { describe, expect, test } from "vitest";
import firstObjectOfArray from "./firstObjectOfArray";

describe("firstObjectOfArray", () => {
    test("returns the first object from an array", () => {
        const data = [{ name: "cheese" }, { name: "ham" }];
        expect(firstObjectOfArray(data)).toEqual({ name: "cheese" });
    });

    test("returns null for an empty array", () => {
        const data: any[] = [];
        expect(firstObjectOfArray(data)).toBeNull();
    });

    test("returns the data itself if it's not an array", () => {
        const data = { name: "cheese" };
        expect(firstObjectOfArray(data)).toEqual({ name: "cheese" });
    });

    test("returns null if data is undefined", () => {
        const data = undefined;
        expect(firstObjectOfArray(data)).toBeNull();
    });
});
