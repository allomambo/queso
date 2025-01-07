const toTel = (str: string): string | null => {
    if (!str) {
        return null;
    }

    return `tel:+${str.replace(/[^+\d]+/g, "")}`;
};

/** @deprecated Use toTel utility instead */
export const tel = toTel;

export default toTel;
