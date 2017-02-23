var User = require('../models/user')
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');


module.exports={
  verify_token: function(req, res, next){
    if (req.headers.token == 'null') {
      res.send({msg:"unauthorized"})
    }else{
      if (jwt.verify(req.headers.token,process.env.SECRET)) {
        next()
      }else {
        res.send({msg:"token expired"})
      }
    }
  },
  get_all_user: function (req, res, next) {
    User.find({}).then(function (users) {
      res.send(users)
    })
  },
  sign_up:function(req,res){
    var newUser = User({
      username:req.body.username,
      password:passwordHash.generate(req.body.password)
    })
    newUser.save(function(err, data){
      if (err) throw err
      res.send(data)
    })
  },
  sign_in:function(req,res,next){
    var token = jwt.sign({username: req.body.username}, process.env.SECRET);
    res.send(token)
  }
}
