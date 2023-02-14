interface ResponseError extends Error {
    response?: Response;
}

const checkStatus = (response: Response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error: ResponseError = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};

export default checkStatus;
