const mongoose = require('mongoose');
                                //database name
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);

//connect the DB again because seed.js is SEPERATE FILE
//because seed.js is SEPERATE from app.js

const AdsModel = require("../models/ads.js");


const ads=[
  {
    title : 'I am looking for my love',
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt mauris ut velit fringilla, at finibus nisl tincidunt. Praesent ut auctor erat. Aenean ut velit varius, ullamcorper orci quis, faucibus augue. Etiam nec semper dui. Ut lobortis libero dapibus augue tempor mattis. Donec eget metus rhoncus, sagittis ipsum in, consectetur felis. Proin posuere ac urna a tempor. Fusce suscipit tincidunt auctor. Nunc placerat enim odio. Suspendisse porta condimentum mi, quis pulvinar felis ultrices ac. Suspendisse vel sem sed tellus mollis euismod. Nullam et mauris vel quam venenatis rutrum vel in felis.Donec auctor sit amet nibh eget imperdiet. Sed non mi nec lacus gravida lacinia. Maecenas hendrerit placerat felis, sit amet egestas mi mollis eget.",
    userNameOf: "demo16"
  }

];

AdsModel.create(
  ads,
  (err,productResults ) => {
    if(err){
      console.log("ONG! database error.");
    }

  }
);
