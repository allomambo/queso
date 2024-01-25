/**
 * Converts a string to kebab-case.
 * @param {string} string - The input string to be converted.
 * @returns {string | null} The input string in kebab-case.
 */
const toKebabCase = (string: string): string | null => {
    if (!string) return null;

    return `${string}`
        .toLowerCase()
        .replace("-", "")
        .replace(/[^\w\u00C0-\u024f]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};

export default toKebabCase;
