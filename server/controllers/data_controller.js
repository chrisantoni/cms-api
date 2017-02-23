var Data = require('../models/data')

module.exports={
  get_all_data:function(req,res){
    if(req.body.letter){
      Data.find({
        letter: req.body.letter
      },function(err,letter){
        if(err)throw err
        res.send(letter)
      })

    }else if(req.body.frequency){
      Data.find({
        frequency: req.body.frequency
      }, function(err,data) {
        if(err){
          throw err
        }else{
          res.send(data)
        }
      })
    }else{
      Data.find({}, function(err,data){
        if(err)throw err
        res.send(data)
      })
    }
  },
  create_data:function(req,res){
    var new_data = Data({
      letter:req.body.letter,
      frequency:req.body.frequency
    })

    new_data.save(function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  update_data:function(req,res){
    Data.findOneAndUpdate({_id:req.body.id},{letter:req.body.letter,frequency:req.body.frequency},function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  delete_data:function(req,res){
    Data.findOneAndRemove({_id:req.body.id},function(err,data){
      if(err)throw err
      res.send(data)
    })
  }
}
