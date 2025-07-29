/**
 * Retrieves the first object from an array, or returns the data itself if it's not an array.
 * @param data The array or object to retrieve the first item from.
 * @returns The first item of the array, or the data itself if it's not an array.
 */
const getFirstObjectOfArray = <T>(data: T[] | T | undefined): T | null => {
    // Check if data is an array
    if (Array.isArray(data)) {
        // If data is an array, return the first element if it exists, otherwise return null
        return data.length > 0 ? data[0] : null;
    }

    // If data is not an array and not undefined, return the data itself
    // If data is undefined, return null
    return data !== undefined ? data : null;
};

/** @deprecated Use getFirstObjectOfArray utility instead */
export const firstObjectOfArray = getFirstObjectOfArray;

export default getFirstObjectOfArray;
