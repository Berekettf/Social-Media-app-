const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:50,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        max: 50,
        unique: true,
    },
    password:{
        type:String,
        min:3,
        required:true
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followering:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

})

 
module.exports=mongoose.model('Banchu', userSchema)