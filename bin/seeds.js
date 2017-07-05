const mongoose = require('mongoose');
                                //database name
mongoose.connect(process.env.MONGODB_URI);

//connect the DB again because seed.js is SEPERATE FILE
//because seed.js is SEPERATE from app.js

const UserModel = require("../models/userModel.js");

const userArr=[
  {
    userName: 'demo0',
    encryptedPassword: "demo0",
    name: 'deokjae',
    age: 22,
    gender: 0.5,
    intro: "Hi, My name is Deokjae.",
    photoUrl: "/images/deokjae.jpg",
    mentions:[
      {
        mention: "did I say I am really cool person?",
        cookies: 3
      },
      {
        mention: "R.kelly's Sex me is my favorite music",
        cookies: 1
      }
    ]
  },
  {
    userName: 'demo1',
    encryptedPassword: "demo1",
    name: 'deokjaerita',
    age: 21,
    gender: 0.2,
    intro: "Hi, My name is Deokjaerita.",
    photoUrl: "/images/deokjae.jpg",
    mentions:[
      {
        mention: "Meh",
        cookies: 2
      },
      {
        mention: "humm",
        cookies: 1
      }
    ]
  }
];

UserModel.create(
  userArr,
  (err,productResults ) => {
    if(err){
      console.log("ONG! database error.");
    }

  }
);
