const express = require('express');
const { userController: { registerUser, loginUser } } = require('../controllers');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
