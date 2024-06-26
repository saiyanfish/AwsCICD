const express = require('express');
const s3User = require('../controller/userController.cjs');

const userRouter = express.Router();

userRouter.post('/create', s3User.createUser);

module.exports = userRouter;
