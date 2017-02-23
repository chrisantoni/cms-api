var DataDate = require('../models/dataDate')
// RegExp(req.body.title, "i")
module.exports={
  get_all_data:function(req,res){
    DataDate.find({},function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  get_all_data_by_category:function(req,res){
    if(req.body.date){
      DataDate.find({letter: req.body.date},function(err,date){
        if(err)throw err
        res.send(date)
      })
    }else if(req.body.frequency){
      DataDate.find({frequency: req.body.frequency}, function(err,frequency) {
        if(err)throw err
        res.send(frequency)
      })
    }else if(req.body.date && req.body.frequency)
    {
      var input_date = req.body.date
      var input_frequency = req.body.frequency
      Data.find({date:input_date,frequency:input_frequency}, function(err,data){
        if(err)throw err
        res.send(data)
      })
    }else{
      DataDate.find({}, function(err,data){
        if(err)throw err
        res.send(data)
      })
    }
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
