export default (Errors) => {
    const fieldsError =
        typeof Errors === "object" &&
        Errors?.reduce((listErrors, error) => {
            if (error?.field) listErrors[error.field] = error;

            return listErrors;
        }, {});

    return fieldsError;
};
