var DataDate = require('../models/DataDate')

module.exports={
  get_all_data:function(req,res){
    DataDate.find({},function(err,data){
      if(err)throw err
    })
  },
  create_data:function(req,res){
    var new_data = DataDate({
      date:req.body.date,
      frequency:req.body.frequency
    })
    
    new_data.save(function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  update_data:function(req,res){
    DataDate.findOneAndUpdate({_id:req.body.id},{date:req.body.date,frequency:req.body.frequency},function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  delete_data:function(req,res){
    DataDate.findOneAndRemove({_id:req.body.id},function(err,data){
      if(err)throw err
      res.send(data)
    })
  }
}
