/*This Route handles the first view, login and sign up.*/

const express = require('express');
const router  = express.Router();

const UserModel = require('../models/userModel.js');

const bcrypt     = require("bcrypt");
const bcryptSalt = 10;

/* GET intial page. */
router.get('/', (req, res, next) => {
  res.render('firstView/first.ejs',{layout:'firstViewLayout.ejs'}); //first.ejs
});

/* Signup page */
router.get('/signup',(req,res,next) => {
  res.render('firstView/signUp.ejs',{layout:'firstViewLayout.ejs'});
});

//File uploading npm here
const multer = require('multer');
const uploader = multer({
  // "dest" (destination) is a multer setting
  // that specifies where to put uploaded files
  dest: __dirname + '/../public/uploads/'
  // save uploaded files inside public/uploads
});

router.post(
  '/signup',
  // user multer to process a SINGLE file upload from the input named "userPhoto"
  uploader.single('userPhoto'),
  (req,res,next)=>{
    //retrieve variables by body parsing
    const username = req.body.usernameInput;
    const password = req.body.passwordInput;

    //check empty String and redriect
    if (username === "" || password === "") {
      console.log("empty");
      res.redirect("/signup");
      return;
    }

    UserModel.findOne(
      { userName : username }, (err, user) => {
        if (err) {
            next(err);
            return;
        }
      // check if the same user name exists
        if (user !== null) {
          console.log("same username");
          res.redirect("/signup");
          return;
        }

        //Create new data in collection when unique name
        const salt     = bcrypt.genSaltSync(bcryptSalt);
        const encryptedPassword = bcrypt.hashSync(password, salt);



        //multer creates "req.file" that contains information about the upload
        const newUser = new UserModel({
          userName:req.body.usernameInput ,
          encryptedPassword: encryptedPassword,  //encrypt this
          name: req.body.nameInput,
          // body.genderInput is undefined
          // when check box is 'on' automatically
          gender: req.body.genderInput,
          photoUrl: '/uploads/' + req.file.filename
        });

        newUser.save((err) => {
          if (err) {
            next(err);
            return;
          }
          // Redirect to home if registration is SUCCESSFUL
          res.redirect('/home');
        });
    });
  }
);

/* Login page */
router.get('/login',(req,res,next) => {
  res.render('firstView/logIn.ejs',{layout:'firstViewLayout.ejs'});
});





module.exports = router;
