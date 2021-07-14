// we basically returning a function that acceptss a function and then it executes that functino
// but it catches any errors and passes it to next if there is an error
// so we can now use this to wrap our async function
module.exports = func => {
    return (req,res,next) =>{
        func(req,res,next).catch(next)

    }
}
