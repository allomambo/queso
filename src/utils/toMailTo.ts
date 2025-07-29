/**
 * Converts an email address to a mailto link.
 * @param {string} str - The input email address to be converted.
 * @returns {string} The input email address in mailto link format.
 */
const toMailTo = (str: string): string => {
    if (!str) {
        return "";
    }

    return `mailto:${str}`.toLowerCase();
};

/** @deprecated Use toMailTo utility instead */
export const mailTo = toMailTo;

export default toMailTo;
