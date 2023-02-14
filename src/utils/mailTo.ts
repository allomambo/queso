const mailTo = (str: string): string | null => {
    if (!str) {
        return null;
    }

    return `mailto:${str}`.toLowerCase();
};

export default mailTo;
