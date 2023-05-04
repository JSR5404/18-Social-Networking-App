const { Schema, model } = require('mongoose');

const usersSchema = new Schema(
    {
        username:
        {
            type: String,
            required: true,
            unique: true,
            trimmed: true
        },
     
    
        email:
        {
            type: STRING,
            required: true,
            unique: true
        },
    
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
      }],

    friends: [{type: Schema.Types.ObjectId,
        ref: 'Users'
    
    }] 

},
{
    toJSON: {
      virtuals: true,
      getters: true
      
    },
    id: false,
  }
);

const Users = model('Users', usersSchema);

module.exports = Users;