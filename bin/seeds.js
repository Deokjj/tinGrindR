const mongoose = require('mongoose');
                                //database name
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);

//connect the DB again because seed.js is SEPERATE FILE
//because seed.js is SEPERATE from app.js

const UserModel = require("../models/userModel.js");


const bcrypt = require('bcrypt');

const userArr=[
  {
    userName: 'demo0',
    encryptedPassword: bcrypt.hashSync("demo0", bcrypt.genSaltSync(10)),
    name: 'deokjae0',
    age: 22,
    gender: 0.5,
    intro: "Hi, My name is Deokjae.",
    photoUrl: "/images/seeds/deokjae.jpg",
    cookies: 3,
    mentions:[]
  },
  {
    userName: 'demo13',
    encryptedPassword: bcrypt.hashSync("demo13", bcrypt.genSaltSync(10)),
    name: 'Laverne Cox',
    age: 35,
    gender: 0,
    intro: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years",
    photoUrl: "/images/seeds/Laverne.jpg",
    cookies: 100,
    mentions:[]
  },
  {
    userName: 'demo2',
    encryptedPassword: bcrypt.hashSync("demo2", bcrypt.genSaltSync(10)),
    name: 'deokjae1',
    age: 21,
    gender: 0.2,
    intro: "Hi, My name is Deokjae-.",
    photoUrl: "/images/seeds/deokjae2.jpg",
    cookies: 0,
    mentions:[]
  },
  {
    userName: 'demo3',
    encryptedPassword: bcrypt.hashSync("demo3", bcrypt.genSaltSync(10)),
    name: 'Anthony',
    age: 25,
    gender: 0.7,
    intro: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    photoUrl: "/images/seeds/Anthony.jpg",
    cookies: 5,
    mentions:[]
  },
  {
    userName: 'demo4',
    encryptedPassword: bcrypt.hashSync("demo4", bcrypt.genSaltSync(10)),
    name: 'deokjae3',
    age: 22,
    gender: 0.3,
    intro: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    photoUrl: "/images/seeds/deokjae3.gif",
    cookies: 3,
    mentions:[]
  },
  {
    userName: 'demo8',
    encryptedPassword: bcrypt.hashSync("demo8", bcrypt.genSaltSync(10)),
    name: 'chrisbrown',
    age: 30,
    gender: 0.3,
    intro: "I am going to Chrisbrown you.",
    photoUrl: "/images/seeds/chrisbrown.jpg",
    cookies: 1000,
    mentions:[]
  },
  {
    userName: 'demo5',
    encryptedPassword: bcrypt.hashSync("demo5", bcrypt.genSaltSync(10)),
    name: 'deokjae4',
    age: 22,
    gender: 0.1,
    intro: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    photoUrl: "/images/seeds/deokjae4.gif",
    cookies: 3,
    mentions:[]
  },
  {
    userName: 'demo9',
    encryptedPassword: bcrypt.hashSync("demo9", bcrypt.genSaltSync(10)),
    name: 'cosby',
    age: 75,
    gender: 0.9,
    intro: "Would you like a drink?",
    photoUrl: "/images/seeds/cosby.jpg",
    cookies: -1,
    mentions:[]
  },
  {
    userName: 'demo6',
    encryptedPassword: bcrypt.hashSync("demo5", bcrypt.genSaltSync(10)),
    name: 'deokjae5',
    age: 22,
    gender: 0.8,
    intro: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    photoUrl: "/images/seeds/deokjae5.jpg",
    cookies: 2,
    mentions:[]
  },
  {
    userName : 'demo1',
    encryptedPassword : bcrypt.hashSync("demo1", bcrypt.genSaltSync(10)),
    name: 'messi',
    age: 33,
    gender: 0.8,
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius a neque ut posuere. Aliquam erat volutpat. Nunc posuere, risus in placerat tempus, metus tortor mattis tellus, lobortis tincidunt tellus justo id libero. Cras convallis enim neque, ut tristique turpis pellentesque non. Curabitur dui est, facilisis at leo eu, ornare aliquet elit. Aliquam semper ligula et tellus consectetur scelerisque. Sed imperdiet, odio vitae bibendum lacinia, mi nisi convallis quam, id consequat purus risus in quam. Nulla risus nunc, consectetur vel lacinia non, mattis a urna. Proin ultrices, elit ut iaculis tempor, libero velit scelerisque felis, ornare molestie tortor nibh at libero. Phasellus nec accumsan mi. Donec ac iaculis turpis.',
    photoUrl: "/images/seeds/messi.jpg",
    cookies: 2,
    mentions: []
  },
  {
    userName: 'demo10',
    encryptedPassword: bcrypt.hashSync("demo10", bcrypt.genSaltSync(10)),
    name: 'hyunna',
    age: 24,
    gender: 0.1,
    intro: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years",
    photoUrl: "/images/seeds/hyunna.jpg",
    cookies: 30,
    mentions:[]
  },
  {
    userName: 'demo7',
    encryptedPassword: bcrypt.hashSync("demo7", bcrypt.genSaltSync(10)),
    name: 'deokjae6',
    age: 22,
    gender: 0.5,
    intro: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    photoUrl: "/images/seeds/deokjae6.gif",
    cookies: 7,
    mentions:[]
  },
  {
    userName: 'demo11',
    encryptedPassword: bcrypt.hashSync("demo11", bcrypt.genSaltSync(10)),
    name: 'Kardasian',
    age: 32,
    gender: 0,
    intro: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years",
    photoUrl: "/images/seeds/kard.jpg",
    cookies: 300,
    mentions:[]
  },
  {
    userName: 'demo12',
    encryptedPassword: bcrypt.hashSync("demo12", bcrypt.genSaltSync(10)),
    name: 'Kim',
    age: 45,
    gender: 0,
    intro: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years",
    photoUrl: "/images/seeds/kim.jpg",
    cookies: 100,
    mentions:[]
  },
  {
    userName: 'demo14',
    encryptedPassword: bcrypt.hashSync("demo14", bcrypt.genSaltSync(10)),
    name: 'Leonard',
    age: 50,
    gender: 0.9,
    intro: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years",
    photoUrl: "/images/seeds/leonard.jpg",
    cookies: 50,
    mentions:[]
  },
  {
    userName: 'demo15',
    encryptedPassword: bcrypt.hashSync("demo15", bcrypt.genSaltSync(10)),
    name: 'rock',
    age: 45,
    gender: 1,
    intro: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years",
    photoUrl: "/images/seeds/rock.jpg",
    cookies: 600,
    mentions:[]
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
