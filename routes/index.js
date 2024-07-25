var express = require('express');
var router = express.Router();
const usermodel = require('./users');

/* GET home page. */
// cookie
router.get('/cook',function(req,res){
  res.cookie("firstcookie", 1);
  res.send('ban gai cookie')
});
// read cook
router.get('/readcooky',function(req,res){
  console.log(req.cookies);
  res.send('check');
});
// delete cookie
router.get('/delcookie',function(req,res){
  res.clearCookie("firstcookie");
  res.send('clear hogai cookie');
})

router.get('/', function(req, res, next) {

  // session create
  req.session.firstsession = true;
  res.render('index', { title: 'bhai kuch karlay yar kuch ab sub ki nazar tuj pay h' });
});
// check session 
router.get('/checksession', function(req,res){
  req.session.firstsession
  if (req.session.firstsession === true) {
    res.send('apka session bana huwa h ');
    
  }else{
    res.send("baithay session bana ja kay")
  }
});

// delete session
router.get('/destroy',function(req,res){
  req.session.destroy(function(err){
    if (err) throw err; 
      res.send('session khatam');
  })
});



// CRUD IN EXPRESS 
// Create 
router.get('/create',async function(req,res){
const createuser = await usermodel.create({
  username : "myk",
  age:25,
  name:"Myk7"
})
res.send(createuser);
});
// Read of ALL
router.get('/read',async function(req,res){
  let read = await usermodel.find();
  res.send(read);
});
// Read only select One data
router.get('/selectfind',async function(req, res){
  let slected = await usermodel.findOne({username: 'myk'});
  res.send(slected);
});
// Delete
router.get('/delete', async function(req,res){
  let del = await usermodel.findOneAndDelete({name: 'Myk7'});
  res.send(del);
})

module.exports = router;
