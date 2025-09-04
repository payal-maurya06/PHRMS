const { signup, login } = require('../Controllers/AuthController.js');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();



router.post('/login',loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;