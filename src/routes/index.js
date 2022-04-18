const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    status: 'Success!',
    message: 'Welcome to Testing API!',
  });
});

module.exports = router;
