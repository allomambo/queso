const arrayToGraphQL = (array: () => []): string => {
    const jsonArray = JSON.stringify(array);
    return jsonArray.replace(/"([^(")"]+)":/g, "$1:");
};

export default arrayToGraphQL;
