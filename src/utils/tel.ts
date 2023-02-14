function tel(str: string) {
    if (!str) return null;
    return `tel:+${str.replace(/[^+\d]+/g, "")}`;
}

export default tel;
