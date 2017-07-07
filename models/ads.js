const mongoose = require("mongoose");

const adsModel = mongoose.model(
  "Ad",               // 1st arg - Model name
  new mongoose.Schema(  // 2nd arg - schema object

    { //1st arg - structure object
      title : {type:String},
      content : {type:String},
      userNameOf: {type:String}
    },
    { //2nd arg - optional
      timestamps: true
      //creates "createdAt" & "updatedAt"
    }
  )
);

module.exports =adsModel;
