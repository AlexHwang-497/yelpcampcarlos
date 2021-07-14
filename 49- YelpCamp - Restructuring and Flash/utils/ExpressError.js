// this is goign to handle our async wrapper function 

class ExpressError extends Error{
    constructor(message, statusCode){
        super()
        this.message = message
        this.statusCode = statusCode
    }
}

// we then export this class...
module.exports = ExpressError