const toKebab = (str: string): string | null => {
    if (!str) {
        return null;
    }

    return str
        .toLowerCase()
        .replace("-", "")
        .replace(/[^\w\u00C0-\u024f]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};

export default toKebab;
