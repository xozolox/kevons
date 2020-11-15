const pool = require('../database');
const testing = pool.query('SELECT productName, category, talle, descripcion, precio, color FROM products');

const home = async ctx => ctx.render('main');

const product = async (ctx) => ctx.render('product', {pro: await testing});

const contacto = async ctx => ctx.render('contactanos');

module.exports = {
  home,
  product,
  contacto,
}