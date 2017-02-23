var express = require('express');
var router = express.Router();
var data_controller = require('../controllers/data_controller')
var data_date_controller = require('../controllers/data_date_controller')
var user_controller = require('../controllers/user_controller')

var passport = require('passport')
const jwt = require('jsonwebtoken');

/* Data Controller */
router.get('/data',data_controller.get_all_data)
router.post('/data/search',data_controller.get_all_data_by_category)
router.post('/data',data_controller.create_data)
router.put('/data',data_controller.update_data)
router.delete('/data',data_controller.delete_data)

/* Data Date Controller */
router.get('/datadate',data_date_controller.get_all_data)
router.post('/datadate/search',data_date_controller.get_all_data_by_category)
router.post('/datadate',data_date_controller.create_data)
router.put('/datadate',data_date_controller.update_data)
router.delete('/datadate',data_date_controller.delete_data)
/* User Controller */

// router.get('/alluser', user_controller.verify_token, function(req, res, next) {
//   modelUser.find({}, function(err, data){
//     if (err) throw err
//     res.json(data)
//   })
// });

router.post('/login', passport.authenticate('local'),user_controller.sign_in)

router.post('/register',user_controller.sign_up)


module.exports = router;
