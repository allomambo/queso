/**
 * Converts a string to camelCase.
 * @param {string} str - The input string to be converted.
 * @returns {string} The input string in camelCase.
 */
const toCamelCase = (str: string): string => {
    if (!str) return "";

    return `${str}`
        .toLowerCase()
        .replace(new RegExp(/[-_]+/, "g"), " ")
        .replace(new RegExp(/[^\w\s]/, "g"), "")
        .replace(new RegExp(/\s+(.)(\w*)/, "g"), (_, $2, $3) => `${$2.toUpperCase() + $3}`)
        .replace(new RegExp(/\w/), (s) => s.toLowerCase());
};

export default toCamelCase;
