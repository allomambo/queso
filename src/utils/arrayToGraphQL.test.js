import { describe, expect, test } from "vitest";
import arrayToGraphQL from "./arrayToGraphQL.ts";

describe("arrayToGraphQL", () => {
    test("arrayToGraphQL works", () => {
        const data = [
            {
                name: "chevron",
                size: 6,
                rotate: 90,
            },
            {
                name: "chevron",
                size: 6,
                rotate: 90,
            },
        ];

        expect(arrayToGraphQL(data)).toBe('[{name:"chevron",size:6,rotate:90},{name:"chevron",size:6,rotate:90}]');
    });
});
