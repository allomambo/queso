function mailTo(str: string) {
    if (!str) return null;

    return `mailto:${str}`.toLowerCase();
}

export default mailTo;
