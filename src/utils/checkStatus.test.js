import checkStatus from "./checkStatus";
import { describe, expect, test } from "vitest";

describe("check Status utils", () => {
    test('checkStatus should return "OK" when status is 200', () => {
        const response = {
            status: 200,
            statusText: "OK",
        };
        const result = checkStatus(response);
        expect(result).toBe(response);
    });

    // need research to test a real error
});
