const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/home', (req, res, next) => {
  if (req.user) {
    res.render('index'); //index.ejs
  }
  else{       //When not logged in send to "/"
    res.redirect('/');
  }
});

router.get('/profile',(req,res,next) => {
  res.render('mainView/profile.ejs');
});

// router.get('/profile/:userId',(req,res,next)=>{
//   // This is currentUser's profile page.
//   // Allow user to edit as well as view their own profile
//   if(req.params.userId === ""){
//     res.locals.ownProfile = true;
//   }
//   else{
//     res.locals.ownProfile = false;
//   }
//   res.render('mainView/profile.ejs');
//
//
// });

module.exports = router;
