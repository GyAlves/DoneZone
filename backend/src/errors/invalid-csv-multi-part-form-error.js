class InvalidCsvMultiPartFormError extends Error {

    statusCode

    constructor() {
        super("CSV data not found in the multipart form data.");
        this.statusCode = 400;
    }
}

export default InvalidCsvMultiPartFormError