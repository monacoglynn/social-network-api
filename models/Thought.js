const {
    Schema,
    model
} = require('mongoose');


const thoughtSchema = new Schema({
    //required must be between 1-280 characters
    thoughtText: String,
    //this is a date set default value to the current timestamp.
    //use a getter method to format the timestamp on the query.
    createdAt: Date,
    //the user that created the thought.
    username: String,
    //reactions array of nested documents created with
    //the reactionSchema.

    //make a virtual called reactionCount, that is a count of how many reactions.

})

//this will be a sub-document inside of the thought model.
const reactionSchema = new Schema({
    //use mongooses ObjectId
    reactionId: ObjectId(),
    //required max is 280 characters
    reactionBody: String,
    username: String,
    createdAt: Date
})