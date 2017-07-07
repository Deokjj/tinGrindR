const mongoose = require("mongoose");

const UserModel = mongoose.model(
  "User",               // 1st arg - Model name
  new mongoose.Schema(  // 2nd arg - schema object

    { //1st arg - structure object
      userName : {type:String},
      encryptedPassword : {type:String},
      name: {type:String},
      age: {type:Number},
      gender: {type:Number, default:undefined},
      intro: {type:String, default:""},
      photoUrl:{type:String},
      cookies:{type:Number, default:0},
      mentions:[      //Array of ↓ object
        {
          mention:{type:String},
          cookies:{type:Number}
        }
      ]
    },
    { //2nd arg - optional
      timestamps: true
      //creates "createdAt" & "updatedAt"
    }

  )
);

module.exports =UserModel;
