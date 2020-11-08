'use strict';

const hapi = require('@hapi/hapi');
const path = require('path');
const hoek = require('@hapi/hoek');
const inert = require('@hapi/inert');
const { request } = require('http');

const start = async () => {
  const server = hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost',
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'public')
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/home/{hello}',
    handler: (req, h) => {
      const url = req.params.hello;
      return `HELLO WORLD! ${url}`;
    }
  })

  server.route({
    method: 'POST',
    path: '/home',
    handler: (req, h) => {
      const url = req.payload.hello;
      return `Hello World! ${url}`;
    }
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return  h.view('main')
    }
  });

  server.route({
    method: 'GET',
    path: '/products',
    handler: (req, h) => {
      return h.view('product', {
        number: [
          {title: 'PARKA DE CUERO', categoria: 'Parkas', talle: 45, color: 'negro oscuro'}, 
          {title: 'JEANS DE CUERO', categoria: 'Jeans', talle: 36, color: 'celeste degradado'}, 
          {title: 'CAMISAS DE RAYAS', categoria: 'Camisas', talle: 38, color: 'rojo carmesi'},
          {title: 'PANTALONES XXXL', categoria: 'Pantalones', talle: 67, color: 'amarillo'}
        ],
      });
    }
  });

  server.route({
    method: 'GET',
    path: '/contactanos',
    handler: (req, h) => {
      return h.view('contactanos');
    }
  });

  await server.register(inert);

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.'
      }
    }
  })

  await server.register(require('@hapi/vision'));

  server.views({
    engines: {
      html: require('ejs'),
    },
    relativeTo: __dirname,
    path: './views',
    isCached: false
  });

  await server.start();
  console.log(`Sever init in port: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

start();