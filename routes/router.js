const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main', {});
});

router.get('/products', (req, res) => {
  res.render('product', {});
});

module.exports = router;