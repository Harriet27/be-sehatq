const router = require('express-promise-router')();
const todoController = require('../controller/todo.controller');

router.get('/', todoController.get);
router.post('/encrypt', todoController.encrypt);

module.exports = router;
