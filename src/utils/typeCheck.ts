const typeCheck = (param: any): string => {
    return Object.prototype.toString.call(param);
};

export default typeCheck;
