const toMailTo = (str: string): string | null => {
    if (!str) {
        return null;
    }

    return `mailto:${str}`.toLowerCase();
};

/** @deprecated Use toMailTo utility instead */
export const mailTo = toMailTo;

export default toMailTo;
