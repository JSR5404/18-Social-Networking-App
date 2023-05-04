const { Schema, model } = require('mongoose');

const reactionsSchema = new Schema(
    {
        username:
        {
            type: String,
            required: true,
            
        },
     
    
        reactionText:
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
    

},
{
    toJSON: {
      virtuals: true,
      getters: true
      
    },
    id: false,
  }
);

const Reactions = model('Reactions', reactionsSchema);

module.exports = Reactions;