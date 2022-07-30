const {
    Schema,
    model
} = require('mongoose');

const userSchema = new Schema({
    //should be unique, required and trimmed.
    username: String,
    //required, and unique, must be valid email address, so find validation on mongoose
    email: String,
    //thoughts will be an array of _id referencing the thought model
    //friends will be an array of _id that reference User model
    //create a virtual called friendCount that will retrieve the length of the friends array.
})