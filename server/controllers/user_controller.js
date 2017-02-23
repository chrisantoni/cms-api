var User = require('../models/user')
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');


module.exports={
  verify_token: function(req, res, next){
    if (req.headers.token == 'null') {
      res.json("you don't have access")
    }else{
      if (jwt.verify(req.headers.token, 'secret')) {
        next()
      }else {
        res.json("token sudah expried")
      }
    }
  },
  sign_up:function(req,res){
    var newUser = User({
      username:req.body.username,
      password:passwordHash.generate(req.body.password)
    })
    newUser.save(function(err, data){
      if (err) throw err
      res.json(data)
    })
  },
  sign_in:function(req,res,next){
    var token = jwt.sign({username: req.body.username}, 'secret');
    res.send({ token: token })
  }
}
