const express = require('express');
const router  = express.Router();

const UserModel = require('../models/userModel.js');
const AdsModel = require('../models/ads.js');

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



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

        userArr = shuffle(userArr);
        var userArr2 = shuffle(userArr);

        res.locals.userArr = userArr;
        res.locals.userArr2 = userArr2;
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
  if(req.user === undefined){
    res.redirect('/');
  }

  UserModel.find(
    {},
    function(err, userArr) {
      if (err){
        next(err);
        return;
      }

      userArr = shuffle(userArr);

      res.locals.userArr = userArr;
      res.render('mainView/list.ejs');
    }
  );
});

router.get('/match',(req,res,next)=>{
  if(req.user === undefined){
    res.redirect('/');
  }
  UserModel.find(
    { _id: { $ne: req.user._id } },
    function(err, userArr) {
      if (err){
        next(err);
        return;
      }

      userArr = shuffle(userArr);

      res.locals.userArr = userArr;
      res.render('mainView/match.ejs');
    }
  );
});

router.get('/ads',(req,res,next)=>{
  AdsModel.find(
    {},
    function(err, ads) {
      if (err){
        next(err);
        return;
      }
      res.locals.ads = ads;

      res.render('mainView/ads.ejs');
    }
  );
});

router.post('/ads',(req,res,next)=>{

  const newAd = new AdsModel({
    title : req.body.titleInput,
    content : req.body.contentInput,
    userNameOf: req.user.userName
  });
  newAd.save((err) => {
    if (err) {
      next(err);
      return;
    }
    // Redirect to home if registration is SUCCESSFUL
    res.redirect('/ads');
  });
});

module.exports = router;
