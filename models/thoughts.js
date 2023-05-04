const { Schema, model } = require('mongoose');
const reactionsSchema = require('./reaction.js');

const thoughtsSchema = new Schema(
    {
        username:
        {
            type: String,
            required: true,
            
        },
     
    
        thought:
        {
            type: String,
            required: true,
            maxLength: 280
            
        },
        
        createdDate:
        {
            type: Date,
            required: true,
            
        },
    
        reactions: [
            reactionsSchema
          ]

},
{
    toJSON: {
      virtuals: true,
      getters: true
      
    },
    id: false,
  }
);

const Thoughts = model('Thoughts', thoughtsSchema);

module.exports = Thoughts;