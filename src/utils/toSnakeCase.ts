/**
 * Converts a string to snake_case.
 * @param {string} str - The input string to be converted.
 * @returns {string} The input string in snake_case.
 */
const toSnakeCase = (str: string): string => {
    if (!str) return "";

    return `${str}`
        .toLowerCase()
        .replace("-", "")
        .replace(/[^\w\u00C0-\u024f]+/g, "_")
        .replace(/^-+|-+$/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};

export default toSnakeCase;
