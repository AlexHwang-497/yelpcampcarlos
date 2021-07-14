
// this is usead as an error handler
// this allows to be able to 'throw the error' on VERIFY PASSOWRD
class AppError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

module.exports = AppError;