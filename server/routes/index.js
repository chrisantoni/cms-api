var express = require('express');
var router = express.Router();
var data_controller = require('../controllers/data_controller')
var data_date_controller = require('../controllers/data_date_controller')


/* Data Controller */
router.get('/data',data_controller.get_all_data)
router.post('/data',data_controller.create_data)
router.put('/data',data_controller.update_data)
router.delete('/data',data_controller.delete_data)

/* Data Date Controller */
router.get('/datadate',data_date_controller.get_all_data)
router.post('/datadate',data_date_controller.create_data)
router.put('/datadate',data_date_controller.update_data)
router.delete('/datadate',data_date_controller.delete_data)
/* User Controller */


module.exports = router;
