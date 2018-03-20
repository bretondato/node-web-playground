var mongoose  = require('mongoose');

var Device = mongoose.model('Device', {
    name:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    data:{
        temperature:{
            type:Number
        },
        Location:{
            type:String
        }
    }
});

module.export = {Device};