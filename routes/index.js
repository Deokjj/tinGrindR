const express = require('express');
const router  = express.Router();

const UserModel = require('../models/userModel.js');

/* GET home page. */
router.get('/home', (req, res, next) => {
  if (req.user) {
    UserModel.find(
      {},
      function(err, userArr) {
        if (err){
          next(err);
          return;
        }
        res.locals.userArr = userArr;
        res.render('index'); //index.ejs
      }
    );
  }
  else{       //When not logged in send to "/"
    res.redirect('/');
  }
});

router.get('/profile',(req,res,next) => {
  if (req.user) {
    res.render('mainView/profile.ejs');
  }
  else{
    res.redirect('/');
  }
});

router.post('/profile', (req,res,next) =>{
  if(req.user === undefined){
    res.redirect('/');
  }
  console.log(req.body.nameInput);
  console.log(req.body.introInput);
  UserModel.findByIdAndUpdate(
    req.user._id,     //1st Argument -> id of document to update
    {                   //2nd Argument -> object of fields to update
      name: req.body.nameInput,
      age: req.body.ageInput,
      intro: req.body.introInput
    },
    (err,user) => {//3rd Argument -> callback
      if(err){
          next(err);
          return;
      }
      res.redirect('/profile');
    }
  );
});

router.get('/profile/:userId',(req,res,next)=>{
  if(req.user === undefined){
    res.redirect('/');
  }
  UserModel.findById(
    req.params.userId,
    (err, theUser)=>{
      if(err){
        next(err);
        return;
      }
      res.locals.theUser = theUser;
      res.render('mainView/otherProfile.ejs');
    }
  );


});

router.get('/list',(req,res,next)=>{

  UserModel.find(
    {},
    function(err, userArr) {
      if (err){
        next(err);
        return;
      }
      res.locals.userArr = userArr;
      res.render('mainView/list.ejs');
    }
  );
});



module.exports = router;
