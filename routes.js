let express = require('express'); 
let userController = require('./controllers/userController');
let router = express.Router(); 

//send list of users 
router.get('/user', userController.userList);

//add a user with form
router.get('/user/add', userController.userFormNew);

router.post('/user', userController.userNew);

//send update form 
router.get('/user/update/:i', userController.userFormUpdate);

//update user in db
router.post('/user/update', userController.userUpdate);

//delete user 
router.get('/user/delete/:i', userController.userDelete);

  module.exports = router; 