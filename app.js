const koa = require('koa');
const koaRouter = require('@koa/router');
const render = require('koa-ejs');
const static = require('koa-static');
const path = require('path');

const app = new koa();
const router = new koaRouter();

render(app, {
  root: path.join(__dirname, 'views'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false,
});

router
  .get('/', async ctx => await ctx.render('main', {
    title: 'KEVONS',
  }))
  .get('/products', ctx => ctx.render('product', {
    number: [
      {title: 'PARKA DE CUERO', categoria: 'Parkas', talle: 45, color: 'negro oscuro'}, 
      {title: 'JEANS DE CUERO', categoria: 'Jeans', talle: 36, color: 'celeste degradado'}, 
      {title: 'CAMISAS DE RAYAS', categoria: 'Camisas', talle: 38, color: 'rojo carmesi'},
      {title: 'PANTALONES XXXL', categoria: 'Pantalones', talle: 67, color: 'amarillo'}
    ],
  }))
  .get('/contactanos', ctx => ctx.render('contactanos'));

app.use(static(path.join(__dirname, 'public')));
app.use(router.routes());
app.use(router.allowedMethods());


app.listen({port: process.env.PORT || 3000});