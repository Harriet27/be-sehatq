const router = require('express-promise-router')();
const todoController = require('../controller/todo.controller');

router.get('/', todoController.get);

module.exports = router;
