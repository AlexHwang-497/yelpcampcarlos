const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        // this is a rminder, this is not considred actually a validation
        // it setus up an index
        unique: true
    }
});
// this is going to add on to our schema a user name
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);