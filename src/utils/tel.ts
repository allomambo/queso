const tel = (str: string): string | null => {
    if (!str) {
        return null;
    }

    return `tel:+${str.replace(/[^+\d]+/g, "")}`;
};

export default tel;
