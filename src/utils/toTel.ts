/**
 * Converts a string to a tel link.
 * @param {string} str - The input string to be converted.
 * @returns {string} The input string in tel link format.
 */
const toTel = (str: string): string => {
    if (!str) {
        return "";
    }

    return `tel:+${str.replace(/[^+\d]+/g, "")}`;
};

/** @deprecated Use toTel utility instead */
export const tel = toTel;

export default toTel;
