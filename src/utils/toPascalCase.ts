/**
 * Converts a string to PascalCase.
 * @param {string} str - The input string to be converted.
 * @returns {string} The input string in PascalCase.
 */
const toPascalCase = (str: string): string => {
    if (!str) return "";

    return `${str}`
        .toLowerCase()
        .replace(new RegExp(/[-_]+/, "g"), " ")
        .replace(new RegExp(/[^\w\s]/, "g"), "")
        .replace(new RegExp(/\s+(.)(\w*)/, "g"), (_, $2, $3) => `${$2.toUpperCase() + $3}`)
        .replace(new RegExp(/\w/), (s) => s.toUpperCase());
};

export default toPascalCase;
