const home = async ctx => ctx.render('main');

const product = async ctx => ctx.render('product', {
  number: [
    {title: 'PARKA DE CUERO', categoria: 'Parkas', talle: 45, color: 'negro oscuro'}, 
    {title: 'JEANS DE CUERO', categoria: 'Jeans', talle: 36, color: 'celeste degradado'}, 
    {title: 'CAMISAS DE RAYAS', categoria: 'Camisas', talle: 38, color: 'rojo carmesi'},
    {title: 'PANTALONES XXXL', categoria: 'Pantalones', talle: 67, color: 'amarillo'}
  ],
});

const contacto = async ctx => ctx.render('contactanos');

module.exports = {
  home,
  product,
  contacto,
}