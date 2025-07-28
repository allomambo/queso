/**
 * Converts a string to kebab-case.
 * @param {string} str - The input string to be converted.
 * @returns {string} The input string in kebab-case.
 */
const toKebabCase = (str: string): string => {
    if (!str) return "";

    return `${str}`
        .toLowerCase()
        .replace("-", "")
        .replace(/[^\w\u00C0-\u024f]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};

export default toKebabCase;
