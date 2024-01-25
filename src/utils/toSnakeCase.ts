/**
 * Converts a string to snake_case.
 * @param {string} string - The input string to be converted.
 * @returns {string | null} The input string in snake_case.
 */
const toSnakeCase = (string: string): string | null => {
    if (!string) return null;

    return `${string}`
        .toLowerCase()
        .replace("-", "")
        .replace(/[^\w\u00C0-\u024f]+/g, "_")
        .replace(/^-+|-+$/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};

export default toSnakeCase;
