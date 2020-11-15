const koa = require('koa');
const koaRouter = require('@koa/router');
const render = require('koa-ejs');
const static = require('koa-static');
const path = require('path');
const route = require('./routes/route');

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
  .get('/', route.home)
  .get('/products', route.product)
  .get('/contactanos', route.contacto)

app.use(static(path.join(__dirname, 'public')));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: process.env.PORT || 3000});