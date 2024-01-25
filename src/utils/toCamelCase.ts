/**
 * Converts a string to camelCase.
 * @param {string} string - The input string to be converted.
 * @returns {string | null} The input string in camelCase.
 */
const toCamelCase = (string: String): string | null => {
    if (!string) return null;

    return `${string}`
        .toLowerCase()
        .replace(new RegExp(/[-_]+/, "g"), " ")
        .replace(new RegExp(/[^\w\s]/, "g"), "")
        .replace(new RegExp(/\s+(.)(\w*)/, "g"), (_, $2, $3) => `${$2.toUpperCase() + $3}`)
        .replace(new RegExp(/\w/), (s) => s.toLowerCase());
};

export default toCamelCase;
