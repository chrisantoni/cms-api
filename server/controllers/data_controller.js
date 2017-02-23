var Data = require('../models/data')
// RegExp(req.body.title, "i")
module.exports={
  get_all_data:function(req,res){
    Data.find({},function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  get_all_data_by_category:function(req,res){
    if(req.body.letter){
      Data.find({letter: req.body.letter},function(err,letter){
        if(err)throw err
        res.send(letter)
      })
    }else if(req.body.frequency){
      Data.find({frequency: req.body.frequency}, function(err,frequency) {
        if(err)throw err
        res.send(frequency)
      })
    }else if(req.body.letter && req.body.frequency){
      var input_letter = req.body.letter
      var input_frequency = req.body.frequency
      Data.find({letter:input_letter,frequency:input_frequency}, function(err,data){
        if(err)throw err
        res.send(data)
      })
    }else{
      Data.find({},function(err,data){
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
