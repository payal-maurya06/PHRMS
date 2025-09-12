
const { signup, login } = require('../controllers/AuthController.js');
const { signupValidation, loginValidation } = require('../middlewares/authvalidation.js');

const router = require('express').Router();



router.post('/login',loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;